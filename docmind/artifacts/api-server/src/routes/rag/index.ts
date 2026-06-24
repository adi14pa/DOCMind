import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import prisma from "@workspace/db";
import {
  GetDocumentParams,
  DeleteDocumentParams,
  QueryDocumentParams,
  QueryDocumentBody,
  GetConversationHistoryParams,
} from "@workspace/api-zod";
import { GoogleGenAI } from "@google/genai";
import { requireAuth, AuthRequest } from "../../middlewares/auth";

const router = Router();

const uploadDir = "/tmp/rag-uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF files are allowed"));
  },
});

const genai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY ?? "",
});

function chunkText(text: string, chunkSize = 800, overlap = 150): string[] {
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end).trim());
    start += chunkSize - overlap;
    if (start >= text.length) break;
  }
  return chunks.filter((c) => c.length > 50);
}

// GET /api/rag/documents
router.get("/documents", requireAuth, async (req: AuthRequest, res) => {
  try {
    const docs = await prisma.ragDocument.findMany({
      where: {
        userId: req.user!.id,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(
      docs.map((d) => ({
        id: d.id,
        filename: d.filename,
        originalName: d.originalName,
        pageCount: d.pageCount,
        chunkCount: d.chunkCount,
        status: d.status,
        createdAt: d.createdAt.toISOString(),
      })),
    );
  } catch (err) {
    req.log.error(err, "Failed to list documents");
    res.status(500).json({ error: "Failed to list documents" });
  }
});

// POST /api/rag/documents
router.post(
  "/documents",
  requireAuth,
  upload.single("file"),
  async (req: AuthRequest, res) => {
    if (!req.file) {
      res.status(400).json({ error: "No PDF file uploaded" });
      return;
    }

    const doc = await prisma.ragDocument.create({
      data: {
        userId: req.user!.id,

        filename: req.file.filename,

        originalName: req.file.originalname,

        status: "processing",

        chunkCount: 0,
      },
    });

    (async () => {
      try {
        const { PDFParse } = await import("pdf-parse");

        const fileBuffer = fs.readFileSync(req.file!.path);

        const parser = new PDFParse({
          data: fileBuffer,
        });

        const pdfData = await parser.getText();

        console.log("PDF DATA RECEIVED");
        console.log("TEXT LENGTH:", pdfData.text.length);
        console.log("PAGES:", pdfData.total);

        const rawText = pdfData.text;

        const pageCount = pdfData.total;

        const chunks = chunkText(rawText);

        console.log("CHUNKS:", chunks.length);
        await prisma.ragChunk.createMany({
          data: chunks.map((content, i) => ({
            documentId: doc.id,
            chunkIndex: i,
            content,
            pageNumber: null,
            searchVector: content,
          })),
        });

        await prisma.ragDocument.update({
          where: { id: doc.id },
          data: { status: "ready", chunkCount: chunks.length, pageCount },
        });

        fs.unlinkSync(req.file!.path);
      } catch (err) {
        console.error("========== PDF ERROR ==========");
        console.error(err);

        if (err instanceof Error) {
          console.error(err.message);
          console.error(err.stack);
        }

        console.error("==============================");
        await prisma.ragDocument.update({
          where: { id: doc.id },
          data: { status: "error" },
        });
      }
    })();

    res.status(201).json({
      id: doc.id,
      filename: doc.filename,
      originalName: doc.originalName,
      pageCount: doc.pageCount,
      chunkCount: 0,
      status: "processing",
      createdAt: doc.createdAt.toISOString(),
    });
  },
);

// GET /api/rag/documents/:id
router.get("/documents/:id", async (req, res) => {
  const parsed = GetDocumentParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const doc = await prisma.ragDocument.findUnique({ where: { id: parsed.data.id } });
  if (!doc) {
    res.status(404).json({ error: "Document not found" });
    return;
  }

  res.json({
    id: doc.id,
    filename: doc.filename,
    originalName: doc.originalName,
    pageCount: doc.pageCount,
    chunkCount: doc.chunkCount,
    status: doc.status,
    createdAt: doc.createdAt.toISOString(),
  });
});

// DELETE /api/rag/documents/:id
router.delete("/documents/:id", requireAuth, async (req: AuthRequest, res) => {
  const parsed = DeleteDocumentParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const doc = await prisma.ragDocument.findFirst({
    where: {
      id: parsed.data.id,

      userId: req.user!.id,
    },
  });
  if (!doc) {
    res.status(404).json({ error: "Document not found" });
    return;
  }

  await prisma.ragDocument.delete({ where: { id: parsed.data.id } });
  res.json({ success: true });
});

// POST /api/rag/documents/:id/query  (SSE streaming)
router.post("/documents/:id/query", async (req, res) => {
  const paramsParsed = QueryDocumentParams.safeParse({ id: Number(req.params.id) });
  const bodyParsed = QueryDocumentBody.safeParse(req.body);

  if (!paramsParsed.success || !bodyParsed.success) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }

  const { id } = paramsParsed.data;
  const { question } = bodyParsed.data;

  const doc = await prisma.ragDocument.findUnique({ where: { id } });
  if (!doc) { res.status(404).json({ error: "Document not found" }); return; }
  if (doc.status !== "ready") { res.status(400).json({ error: "Document is still processing" }); return; }

  const chunks = await prisma.ragChunk.findMany({
    where: { documentId: id },
    take: 200,
  });

  const questionLower = question.toLowerCase();
  const questionWords = questionLower.split(/\s+/).filter((w) => w.length > 3);

  const scored = chunks
    .map((c) => {
      const contentLower = c.content.toLowerCase();
      const score = questionWords.reduce(
        (acc, word) => acc + (contentLower.includes(word) ? 1 : 0),
        0
      );
      return { ...c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const context = scored.map((c, i) => `[Source ${i + 1}]\n${c.content}`).join("\n\n---\n\n");
  const sourceSnippets = scored.map((c) => c.content.slice(0, 200));

  const systemPrompt = `You are a precise document assistant. Answer questions using ONLY the provided document excerpts.
If the answer is not in the excerpts, say so clearly. Always cite which source(s) you used.
Be concise and factual. Format your answer in clear paragraphs.`;

  const userPrompt = `Document excerpts:\n\n${context}\n\n---\n\nQuestion: ${question}`;

  await prisma.ragConversation.create({
    data: { documentId: id, role: "user", content: question, sources: null },
  });

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write(`data: ${JSON.stringify({ sources: sourceSnippets })}\n\n`);

  let fullResponse = "";

  try {
    const stream = await genai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\n" + userPrompt }] },
      ],
      config: { maxOutputTokens: 8192 },
    });

    for await (const chunk of stream) {
      const text = chunk.text;
      if (text) {
        fullResponse += text;
        res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
      }
    }
  } catch (err) {
    req.log.error(err, "Gemini error");
    res.write(`data: ${JSON.stringify({ error: "AI generation failed" })}\n\n`);
  }

  await prisma.ragConversation.create({
    data: {
      documentId: id,
      role: "assistant",
      content: fullResponse,
      sources: JSON.stringify(sourceSnippets),
    },
  });

  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
  res.end();
});

// GET /api/rag/documents/:id/conversations
router.get("/documents/:id/conversations", async (req, res) => {
  const parsed = GetConversationHistoryParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const history = await prisma.ragConversation.findMany({
    where: { documentId: parsed.data.id },
    orderBy: { createdAt: "asc" },
  });

  res.json(
    history.map((h) => ({
      id: h.id,
      documentId: h.documentId,
      role: h.role,
      content: h.content,
      sources: h.sources,
      createdAt: h.createdAt.toISOString(),
    }))
  );
});

export default router;

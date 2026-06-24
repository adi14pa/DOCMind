import "dotenv/config";

import { PrismaClient } from "../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

const rawUrl = process.env.NEON_DATABASE_URL;

if (!rawUrl) {
  throw new Error(
    "NEON_DATABASE_URL must be set. Add your NeonDB connection string.",
  );
}

const databaseUrl = rawUrl.replace(/^["']|["']$/g, "");

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;

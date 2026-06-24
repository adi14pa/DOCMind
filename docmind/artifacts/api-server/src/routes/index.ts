import { Router, type IRouter } from "express";
import healthRouter from "./health";
import ragRouter from "./rag/index";
import authRouter from "./auth/index";
import { requireAuth, AuthRequest } from "../middlewares/auth";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/rag", ragRouter);
router.use("/auth", authRouter);


export default router;

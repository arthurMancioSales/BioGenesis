// @author: {Arthur}
import { Router } from "express";
import { router as sessionRouter } from "./routes/session.js";
import { router as apiRouter } from "./routes/api.js";
import { router as pageRouter } from "./routes/pages.js";

const router = Router();

// @author {Thiago}
router.use("/", pageRouter);

// @author: {Arthur}
router.use("/api", apiRouter);

// @author: {Arthur}
router.use("/session", sessionRouter);

export default router;

// @author: {Arthur}
import { Router } from "express";
import { logUser } from "./controllers/userController.js";
import { router as apiRouter } from "./routes/api.js";
import { router as pageRouter } from "./routes/pages.js";

const router = Router();

// @author {Thiago}
router.use("/", pageRouter);

// @author: {Arthur}
router.use("/api", apiRouter);

// @author: {Arthur}
router.post("/session", logUser)

export default router;

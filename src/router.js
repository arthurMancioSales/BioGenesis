// @author: {Arthur}
import { Router } from "express";
import { router as bookRouter } from "./routes/bookshelfs.js";
import { router as pageRouter } from "./routes/pages.js";

const router = Router();

/**
 * @author {Thiago}
 */
router.use("/", pageRouter);

router.use("/bookshelf", bookRouter);

export default router;

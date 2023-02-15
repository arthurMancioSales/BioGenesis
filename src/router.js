import { Router } from "express";
import { router as bookRouter } from "./routes/bookshelfs.js";

const router = Router();

router.use("/bookshelf", bookRouter);


export default router
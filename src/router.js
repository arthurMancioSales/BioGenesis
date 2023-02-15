import { Router } from "express";
import { router as bookRouter } from "./routes/bookshelfs.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = ["/page1", "/page2", "/page3"];

const router = Router();

router.use("/bookshelf", bookRouter);

router.get(`/*`, (req, res) => {
  if (pages.includes(req.path)) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  } else {
    res.status(404).send("Não foi possível encontrar o recurso especificado");
  }
});

export default router;

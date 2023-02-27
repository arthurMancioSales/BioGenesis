// @author: {Arthur}
import express from "express";
import dotenv from "dotenv";
import router from "./src/router.js";
import files from "./src/lib/upload.js";
import { createBook } from "./src/controllers/bookController.js";
import cookieParser from "cookie-parser";

// Carrega variáveis de ambiente
dotenv.config();

// Instancia aplicação express
const app = express();
const port = process.env.SERVER_PORT;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Rotas
app.use("/", express.static("./public"));
app.use("/", router);

// Rota para upload de arquivos
app.post("/upload", files, async (req, res, next) => {
    createBook(req, res, next);
});

// Redirecionamento de página não encontrada
app.use(function (req, res) {
    res.status(404).send("Não foi possível encontrar o recurso especificado");
});

//  Roda o servidor
app.listen(port, () => {
    console.log(`Server running on http://149.28.100.51:${port}`);
});

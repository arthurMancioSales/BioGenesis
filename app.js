// @author: {Arthur}
import https from "https";
import fs from "fs";
import express from "express";
import dotenv from "dotenv";
import router from "./src/router.js";
import cookieParser from "cookie-parser";

// Carrega variáveis de ambiente
dotenv.config();

// Instancia aplicação express
const app = express();
const port = process.env.SERVER_PORT;

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Rotas
app.use("/", express.static("./public"));
app.use("/", router);

// Redirecionamento de página não encontrada
app.use(function (req, res) {
    res.status(404).send("Não foi possível encontrar o recurso especificado");
});

//  Roda o servidor
const server = https.createServer(options, app);
server.listen(port, () => {
    console.log(`Server running on https://149.28.100.51:${port}`);
});

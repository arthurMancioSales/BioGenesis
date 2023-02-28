// @author: {Arthur}
import express from "express";
import dotenv from "dotenv";
import router from "./src/router.js";
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

// Redirecionamento de página não encontrada
app.use(function (req, res) {
  res.status(404).send("Não foi possível encontrar o recurso especificado");
});

//  Roda o servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

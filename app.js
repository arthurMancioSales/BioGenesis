// @author: {Arthur}
import https from "https";
import fs from "fs";
import express from "express";
import dotenv from "dotenv";
import router from "./src/router.js";
import cookieParser from "cookie-parser";

// Load enviroment variables
dotenv.config();

// Start express application
const app = express();
const port = process.env.SERVER_PORT;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", express.static("./public"));
app.use("/", router);

// 404 redirect
app.use(function (req, res) {
    res.status(404).send("Não foi possível encontrar o recurso especificado");
});

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

// Start the server
const server = https.createServer(options, app);
server.listen(port, () => {
    console.log(`Server running on https://149.28.100.51:${port}`);
});

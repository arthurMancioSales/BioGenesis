import express from "express";
import dotenv from "dotenv";
import router from "./src/router.js";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.use("/src", express.static("./src"));
app.use("/", express.static("./public"));

app.use("/", router);

// app.use(function (req, res) {
//   res.status(404).send("Não foi possível encontrar o recurso especificado");
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

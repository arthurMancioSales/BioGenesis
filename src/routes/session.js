// @author: {Arthur}
import { Router } from "express";
import * as userController from "../controllers/userController.js";

export const router = Router();

// Valida o login de um usuário -> @author {Arthur}
router.post("/", userController.logUser);
// {
//     "username": "nomeDoUsuario",
//     "email": "emailDoUsuario",
//     "password": "senhaDoUsuario"
// }

// Termina a sessão de um usuário -> @author {Arthur}
router.delete("/", (req, res) => {
    try {
        res.clearCookie("session")
        res.status(200).send("Sessão terminada com sucesso")
    } catch (error) {
        console.log(error);
    }
})

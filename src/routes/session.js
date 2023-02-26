// @author: {Arthur}
import { Router } from "express";
import * as userController from "../controllers/userController.js";
import authenticateUser from "../lib/authenticateUser.js";

export const router = Router();

// Valida o login de um usuário -> @author {Arthur}
router.post("/", userController.logUser);
// {
//     "username": "nomeDoUsuario",
//     "email": "emailDoUsuario",
//     "password": "senhaDoUsuario"
// }

// Termina a sessão de um usuário -> @author {Arthur}
router.delete("/", authenticateUser, (req, res) => {
    try {
        res.clearCookie("session")
        res.status(200).send("Sessão terminada com sucesso")
    } catch (error) {
        console.log(error);
    }
})

// Retorna as informações presententes no cookie de sessão do usuário -> @author {Arthur}
router.get("/", authenticateUser, userController.getUserInfo)
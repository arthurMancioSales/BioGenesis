import * as userService from "../services/userService.js";
import JWT from "jsonwebtoken";
import { config } from "dotenv";

config();
const TAG = "userController";

const response = {
    message: "",
    data: null,
    error: null,
};

// Cria um usuário novo -> @author {Arthur}
export async function createUser(req, res) {
    console.log(TAG);
    console.time("createUser()");

    const { username, email, password } = req.body;

    if (username.length == 0 || typeof username != "string") {
        response.message = "Informe um nome de usuário válido";
        response.data = null;
        response.error = "Nome usuário inválido";

        res.status(400).json(response);
        return;
    }
    if (email.length == 0 || typeof email != "string") {
        response.message = "Informe um email válido";
        response.data = null;
        response.error = "Email inválido";

        res.status(400).json(response);
        return;
    }
    if (password.length == 0 || typeof password != "string") {
        response.message = "Informe uma senha válida";
        response.data = null;
        response.error = "Senha inválida";

        res.status(400).json(response);
        return;
    }

    try {
        const serviceResponse = await userService.createUser(
            username,
            email,
            password
        );

        response.message = "Usuário criado com sucesso";
        response.data = serviceResponse;
        response.error = null;

        res.status(200).json(response);
        console.timeEnd("createUser()");
    } catch (error) {
        console.log(TAG, "\n", error);

        response.message = "Não foi possível criar um usuário";
        response.data = null;
        response.error = error;

        res.status(500)
        res.json(JSON.stringify(response));
        console.timeEnd("createUser()");
    }
}

// Autentica um usuário -> @author {Arthur}
export async function logUser(req, res) {
    console.log(TAG);
    console.time("logUser()");

    const { username, email, password } = req.body;

    if (username == undefined || typeof username != "string") {
        response.message = "Informe um nome de usuário válido";
        response.data = null;
        response.error = "Nome usuário inválido";

        res.status(400).json(response);
        return;
    }
    if (email == undefined || typeof email != "string") {
        response.message = "Informe um email válido";
        response.data = null;
        response.error = "Email inválido";

        res.status(400).json(response);
        return;
    }
    if (password == undefined || typeof password != "string") {
        response.message = "Informe uma senha válida";
        response.data = null;
        response.error = "Senha inválida";

        res.status(400).json(response);
        return;
    }

    try {
        const serviceResponse = await userService.logUser(
            username,
            email,
            password
        );

        if (serviceResponse) {
            const sessionJWT = JWT.sign(
                { username: username, email: email },
                process.env.JWT_SECRET,
                { expiresIn: "336h" }
            );
            res.cookie("session", sessionJWT);

            response.message = "Usuário logado com sucesso";
            response.data = null;
            response.error = null;

            res.status(200).json(response);
            console.timeEnd("logUser()");
        } else {
            response.message = "Não foi possível completar o login";
            response.data = null;
            response.error = "Usuário ou senha incorretos";
            res.status(403).json(response);
            console.timeEnd("logUser()");
        }
    } catch (e) {
        console.log(TAG, e);

        response.message = "Não foi possível completar o login";
        response.data = null;
        response.error = "Erro interno do servidor";

        res.status(500).json(response);
        console.timeEnd("logUser()");
    }
}

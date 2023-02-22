import * as userService from "../services/userService.js";
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

        res.status(500).json(response);
        console.timeEnd("createUser()");
    }
}

export async function logUser(req, res) {
    console.log(TAG)
    console.time("logUser()")
    
    const { username, email, password } = req.body
    
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
        const serviceResponse = await userService.logUser(username, email, password)

        if (serviceResponse) {
            response.message = "Usuário logado com sucesso";
            response.data = null;
            response.error = null;

            res.status(200).json(response);
            console.timeEnd("logUser()");
        } else {
            throw "Usuário ou senha incorreto"
        }
    } catch (e) {
        console.log(TAG, e);

        response.message = "Usuário ou senha incorreto";
        response.data = null;
        response.error = e;

        res.status(500).json(response);
        console.timeEnd("logUser()");
    }
}
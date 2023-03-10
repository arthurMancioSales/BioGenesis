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

    res.status(500);
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
      res.cookie("session", serviceResponse, {
        maxAge: 14 * 24 * 60 * 60 * 1000,
      });

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

// Retorna as informações presententes no cookie de sessão do usuário -> @author {Arthur} @coauthor {Thiago}
export async function getUserInfo(req, res) {
  console.log(TAG);
  console.time("getUserInfo()");

  const sessionCookie = req.cookies.session;

  try {
    const userinfo = userService.getUserInfo(sessionCookie);
    response.message = "Informações obtidas com sucesso";
    response.data = userinfo;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("getUserInfo");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possivel obter as informações do usuário";
    response.data = null;
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
  }
}

// Atualiza um usuário -> @author {Arthur}
export async function updateUser(req, res) {
  console.log(TAG);
  console.time("updateUser()");

  const { newUsername, newEmail, newPassword } = req.body;
  const sessionCookie = req.cookies.session;

  try {
    const serviceResponse = await userService.updateUser(
      newUsername,
      newEmail,
      newPassword,
      sessionCookie
    );

    response.message = "Informações atualizadas com sucesso";
    response.data = serviceResponse;
    response.error = null;

    res.clearCookie("session");
    res.cookie("session", serviceResponse, {
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json(response);
    console.timeEnd("updateUser()");
  } catch (error) {
    console.log(TAG);

    response.message = "Não foi possível atualizar as informações do usuário";
    response.data = null;
    response.error = error;

    res.status(500).json(response);
    console.timeEnd("updateUser()");
  }
}

// Apaga um usuário (soft delete) -> @author {Arthur} @coauthor {Thiago}
export async function deleteUser(req, res) {
  console.log(TAG);
  console.time("deleteUser()");

  const sessionCookie = req.cookies.session;

  try {
    const serviceResponse = await userService.deleteUser(sessionCookie);

    response.message = "Usuário deletado com sucesso";
    response.data = serviceResponse.rows;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("deleteUser()");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possivel deletar o usuário";
    response.data = null;
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
    console.timeEnd("deleteUser()");
  }
}

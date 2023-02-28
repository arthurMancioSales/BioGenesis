// @author: {Arthur}
import * as bookshelfService from "../services/bookshelfService.js";
const TAG = "Bookshelf Controller";

const response = {
  message: "",
  data: null,
  error: null,
};

// Cria uma estante nova -> @author {Arthur}
export async function createBookshelf(req, res) {
  //  Operações de debugging
  console.log(TAG);
  console.time("createBookshelf()");
  //  Coleta do input
  const name = req.body.name;

  if (name.length == 0 || typeof name != "string") {
    response.message = "Informe um nome válido para a estante";
    response.data = null;
    response.error = "Nome inválido";

    res.status(400).json(response);
    return;
  }

  try {
    const serviceResponse = await bookshelfService.createBookshelf(name);

    response.message = "Estante criada com sucesso";
    response.data = serviceResponse;
    (response.error = null), res.status(200).json(response);
    console.timeEnd("createBookshelf()");
  } catch (error) {
    console.log(TAG, error);

    response.message = "Não foi possível criar a estante";
    response.data = null;
    response.error = error;

    res.status(500).json(response);
    console.timeEnd("createBookshelf()");
  }
}

// Retorna um array com todas as estantes -> @author {Arthur}
export async function getAllBookshelves(req, res) {
  //  Operações de debugging
  console.log(TAG);
  console.time("getAllBookshelves()");

  try {
    const serviceResponse = await bookshelfService.getAllBookshelves();

    response.message = "Estantes retornadas com sucesso";
    response.data = serviceResponse;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("getAllBookshelves()");
  } catch (error) {
    console.log(TAG, error);

    response.message = "Não foi possível retornar as estantes";
    response.data = null;
    response.error = "Error interno do servidor";

    res.status(400).json(response);
    console.timeEnd("getAllBookshelves()");
  }
}

// Apaga uma estante -> @author {Arthur}
export async function deleteBookshelf(req, res) {
  console.log(TAG);
  console.time("deleteBookshelf()");

  const bookshelfID = req.params.id;

  if (bookshelfID < 0 || typeof bookshelfID != "int") {
    response.message = "Não foi possível apagar a estante";
    response.data = null;
    response.error = "Informe um ID válido";
  }

  try {
    const serviceResponse = await bookshelfService.deleteBookshelf(bookshelfID);

    if (serviceResponse === false) {
      response.message = "Estante não pode ser deletada pois contem livros";
      response.data = false;
      response.error = "Operação não permitida";

      res.status(403).json(response);
      return;
    }

    response.message = "Estante apagada com sucesso";
    response.data = serviceResponse;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("deleteBookshelf()");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possível apagar a estante";
    response.data = null;
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
    console.timeEnd("deleteBookshelf()");
  }
}

// Atualiza uma estante -> @author {Arthur}
export async function updateBookshelf(req, res) {
  console.log(TAG);
  console.time("updateBookshelf()");

  const { id: bookshelfID, name: newName } = req.body;

  if (bookshelfID < 0 || typeof bookshelfID != "int") {
    response.message = "Não foi possível atualizar a estante";
    response.data = null;
    response.error = "Informe um ID válido";
  }

  try {
    const serviceResponse = await bookshelfService.updateBookshelf(
      newName,
      bookshelfID
    );

    response.message = "Estante atualizada com sucesso";
    response.data = serviceResponse;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("updateBookshelf()");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possível atualizar a estante";
    response.data = null;
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
    console.timeEnd("updateBookshelf()");
  }
}

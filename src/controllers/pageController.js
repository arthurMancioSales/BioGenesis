//  @author {Arthur}
import * as pageService from "../services/pageService.js";
const TAG = "Page Controller";

const response = {
  message: "",
  data: null,
  error: null,
};

// Cria uma página nova para um livro -> @author {Arthur}
export async function createPage(req, res) {
  console.log(TAG);
  console.time("createPage()");

  const { bookID, topicName, content, image, authorName } = req.body;

  if (isNaN(bookID) || bookID < 0) {
    response.message = "Insira um BookId válido";
    response.error = "Book id não é um número válido";

    res.status(400).json(response);
    return;
  }
  if (typeof topicName != "string" || topicName.length < 0) {
    response.message = "Insira um nome de tópico válido";
    response.error = "Nome de tópico inválido";

    res.status(400).json(response);
    return;
  }
  if (typeof content != "string" || content.length < 0) {
    response.message = "Insira um conteúdo válido";
    response.error = "O conteúdo informado inválido";

    res.status(400).json(response);
    return;
  }
  if (typeof image != "string" || image.length < 0) {
    response.message = "Insira um caminho de imagem válido";
    response.error = "O caminho de imagem inválido";

    res.status(400).json(response);
    return;
  }
  if (typeof authorName != "string" || authorName.length < 0) {
    response.message = "Insira um nome de usuário válido";
    response.error = "Nome de usuário não inválido";

    res.status(400).json(response);
    return;
  }

  try {
    const serviceResponse = await pageService.createPage(
      bookID,
      topicName,
      content,
      image,
      authorName
    );

    response.message = "Página criada com sucesso";
    response.data = serviceResponse;

    res.status(200).json(response);
    console.timeEnd("createPage()");
  } catch (error) {
    console.log(TAG, error);

    response.message = "Não foi possível criar a página";
    response.error = error;

    res.status(500).json(response);
    console.timeEnd("createPage()");
  }
}

// Retorna um array com todas as páginas de um livro específico -> @author {Arthur}
export async function getAllPagesFromBook(req, res) {
  console.log(TAG);
  console.time("getAllPagesFromBook()");

  const bookID = req.params.id;

  if (isNaN(bookID) || bookID < 0) {
    response.message = "Insira um bookID válido";
    response.error = "BookID informado não é um número válido";

    res.status(400).json(response);
    return;
  }

  try {
    const response = await pageService.getAllPagesFromBook(bookID);

    response.message = "Operação concluída com sucesso";
    response.data = response;

    res.status(200).json(response);
    console.timeEnd("getAllPagesFromBook()");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possível concluir a operação";
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
    console.timeEnd("getAllPagesFromBook()");
  }
}

export async function deletePage(req, res) {
  console.log(TAG);
  console.time("deletePage()");

  const pageID = req.params.id;

  if (pageID < 0 || typeof pageID != "int") {
    response.message = "Não foi possível apagar a pagina";
    response.data = null;
    response.error = "Informe um ID válido";
  }

  try {
    const serviceResponse = await pageService.deletePage(pageID);

    response.message = "Pagina apagada com sucesso";
    response.data = serviceResponse;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("deletePage()");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possível apagar a pagina";
    response.data = null;
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
    console.timeEnd("deletePage()");
  }
}

export async function updatePage(req, res) {
  console.log(TAG);
  console.time("updatePage()");

  const { topic, content, image, editor, pageID } = req.body;

  if (pageID < 0 || typeof pageID != "int") {
    response.message = "Não foi possível atualizar a pagina";
    response.data = null;
    response.error = "Informe um ID válido";
  }

  try {
    const serviceResponse = await pageService.updatePage(
      topic,
      content,
      image,
      editor,
      pageID
    );

    response.message = "Pagina atualizada com sucesso";
    response.data = serviceResponse;
    response.error = null;

    res.status(200).json(response);
    console.timeEnd("updatePage()");
  } catch (error) {
    console.log(TAG);
    console.log(error);

    response.message = "Não foi possível atualizar a pagina";
    response.data = null;
    response.error = "Erro interno do servidor";

    res.status(500).json(response);
    console.timeEnd("updatePage()");
  }
}

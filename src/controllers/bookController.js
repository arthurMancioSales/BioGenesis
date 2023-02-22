// @author: {Arthur}
import * as bookService from "../services/bookService.js";
import * as pageService from "../services/pageService.js";
import pool from "../repositories/database.js";
const TAG = "Book Controller";

const response = {
    message: "",
    data: null,
    error: null,
};

// Cria um livro novo -> @author {Arthur}
export async function createBook(req, res, next, client = pool) {
    console.log(TAG);
    console.time("createBook()");

    const { bookTitle, bookshelfName, userName} = req.body;
    const coverImage = req.files["coverImage"][0].filename

    if (bookTitle.length == 0 || typeof( bookTitle) != "string") {
        response.message = "Informe um nome válido para o livro";
        response.data = null;
        response.error = "Nome de livro inválido";

        res.status(400).json(response);
        return;
    }

    if (bookshelfName.length == 0 || typeof( bookshelfName) != "string") {
        response.message = "Informe um nome de estante válida";
        response.data = null;
        response.error = "Nome de estante inválido";

        res.status(400).json(response);
        return;
    }

    if (userName.length == 0 || typeof( userName) != "string") {
        response.message = "Informe um nome válido para o autor";
        response.data = null;
        response.error = "Nome de autor inválido";

        res.status(400).json(response);
        return;
    }

    if (coverImage.length == 0 || typeof( coverImage) != "string") {
        response.message = "Informe uma imagem válida";
        response.data = null;
        response.error = "Nome de imagem fornecida é inválido";

        res.status(400).json(response);
        return;
    }

    try {
        client.query("BEGIN")
        const serviceResponse = await bookService.createBook(
            bookTitle,
            bookshelfName,
            userName,
            coverImage,
            client
        );
        if (req.files) {
            for (const key in req.files) {
                const filename = req.files[key][0].filename;
                const bookID = serviceResponse[0]['book_id'];
                switch (key) {
                    case "imageUpload2":    
                        const { textInput2, dropdown2 } = req.body;
                        await pageService.createPage(
                            bookID,
                            dropdown2,
                            textInput2,
                            filename,
                            userName,
                            client
                        );
                        break;
                    case "imageUpload3":
                        const { textInput3, dropdown3 } = req.body;
                        await pageService.createPage(
                            bookID,
                            dropdown3,
                            textInput3,
                            filename,
                            userName,
                            client
                        );
                        break;
                    case "imageUpload4":
                        const { textInput4, dropdown4 } = req.body;
                        await pageService.createPage(
                            bookID,
                            dropdown4,
                            textInput4,
                            filename,
                            userName,
                            client
                        );
                        break;
                    case "imageUpload5":
                        const { textInput5, dropdown5 } = req.body;
                        await pageService.createPage(
                            bookID,
                            dropdown5,
                            textInput5,
                            filename,
                            userName,
                            client
                        );
                        break;
                }
            }
        }
        response.message = "Livro criado com sucesso";
        response.data = serviceResponse;

        client.query("COMMIT")
        res.status(200).json(response);
        console.timeEnd("createBook()");
    } catch (error) {
        console.log(TAG);
        console.table(error)

        response.message = "Não foi possível criar o livro";
        response.error = error;

        client.query("ROLLBACK")
        res.status(500).json(response);
        console.timeEnd("createBook()");
    } finally {
        client.release()
    }
}

// Retorna um array com todos os livros de uma estante -> @author {Arthur}
export async function readAllBooksOnShelf(req, res) {
    console.log(TAG);
    console.time("readAllBooksOnShelf()");

    const bookshelfID = req.params.id;

    if (isNaN(bookshelfID) || bookshelfID < 0) {
        response.message = "Insira um bookshelfID válido";
        response.error = "Bookshelf id não é um número válido";

        res.status(400).json(response);
        return;
    }

    try {
        const serviceResponse = await bookService.readAllBooksOnShelf(
            bookshelfID
        );

        response.message = "Operação concluida com sucesso";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("readAllBooksOnShelf()");
    } catch (error) {
        response.message = "Não foi possível retornar os livros da estante";
        response.error = "Erro interno do servidor";

        res.status(500).json(response);

        console.log(TAG, error);
        console.timeEnd("readAllBooksOnShelf()");
    }
}

// Retorna um array com todos os livros -> @author {Arthur}
export async function getAllBooks(req, res) {
    console.log(TAG);
    console.time("getAllBooks()");

    try {
        const serviceResponse = await bookService.getAllBooks();

        response.message = "Operação concluida com sucesso";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("readAllBooksOnShelf()");
    } catch (error) {
        response.message = "Não foi possível retornar todo os livros";
        response.error = "Erro interno do servidor";

        res.status(500).json(response);

        console.log(TAG, error);
        console.timeEnd("getAllBooks()");
    }
}

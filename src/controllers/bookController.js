// @author: {Arthur}
import * as bookService from "../services/bookService.js";
const TAG = "Book Controller";

// Cria um livro novo -> @author {Arthur}
export async function createBook(req, res) {

    console.log(TAG);
    console.time("createBook()")

    const response = {
        message: "",
        data: null,
        error: null,
    };

    const {bookTitle, bookshelfName, userName} = req.body

    if (bookTitle.length == 0 || typeof(bookTitle) != "string") {
        response.message = "Informe um nome válido para o livro";
        response.data = null;
        response.error = "Nome de livro inválido"

        res.status(400).json(response)
        return
    }

    if (bookshelfName.length == 0 || typeof(bookshelfName) != "string") {
        response.message = "Informe um nome de estante válida";
        response.data = null;
        response.error = "Nome de estante inválido"

        res.status(400).json(response)
        return
    }
    
    if (userName.length == 0 || typeof(userName) != "string") {
        response.message = "Informe um nome válido para o autor";
        response.data = null;
        response.error = "Nome de autor inválido"

        res.status(400).json(response)
        return
    }

    try {
        const serviceResponse = await bookService.createBook(bookTitle, bookshelfName, userName)

        response.message = "Livro criado com sucesso"
        response.data = serviceResponse

        res.status(200).json(response)
        console.timeEnd("createBook()")
    } catch (error) {
        console.log(TAG, error)

        response.message = "Não foi possível criar o livro"
        response.error = "Erro interno do servidor"

        res.status(500).json(response)
        console.timeEnd("createBook()")
    }
} 
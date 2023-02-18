// @author: {Arthur}
import * as bookshelfService from "../services/bookshelfService.js";
const TAG = "Bookshelf Controller";

// Cria uma estante nova -> @author {Arthur}
export async function createBookshelf(req, res) {
    //  Operações de debugging
    console.log(TAG);
    console.time("createBookshelf()");
    //  Coleta do input
    const name = req.body.name;

    const response = {
        message: "",
        data: null,
        error: null,
    };

    if (name.length == 0 || typeof(name) != "string") {
        response.message = "Informe um nome válido para a estante";
        response.data = null;
        response.error = "Nome inválido"

        res.status(400).json(response)
        return
    }

    try {
        const serviceResponse = await bookshelfService.createBookshelf(name);

        response.message = "Estante criada com sucesso";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("createBookshelf()");
    } catch (error) {
        console.log(TAG, error);

        response.message = "Não foi possível criar a estante";
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

    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        const serviceResponse = await bookshelfService.getAllBookshelves()

        response.message = "Estantes retornadas com sucesso"
        response.data = serviceResponse

        res.status(200).json(response)
        console.timeEnd("getAllBookshelves()")
    } catch (error) {
        console.log(TAG, error)

        response.message = "Não foi possível retornar as estantes"
        response.error = "Error interno do servidor"

        res.status(400).json(response)
        console.timeEnd("getAllBookshelves()")
    }
}
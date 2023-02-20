// @author: {Arthur}
import { Router } from "express";
import * as bookshelfController from "../controllers/bookshelfController.js";
import * as bookController from "../controllers/bookController.js";
import * as pageController from "../controllers/pageController.js"

export const router = Router();

const bookshelves = [
    { id: 1, name: "animais terrestres1" },
    { id: 3, name: "animais terrestres2" },
    { id: 4, name: "animais terrestres3" },
    { id: 3, name: "animais terrestres4" },
    { id: 3, name: "animais terrestres5" },
];

const books = [
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 2 },
    { id: 1, nome: "leão", estante_id: 2 },
    { id: 1, nome: "leão", estante_id: 2 },
    { id: 1, nome: "leão", estante_id: 3 },
    { id: 1, nome: "leão", estante_id: 3 },
    { id: 1, nome: "leão", estante_id: 3 },
    { id: 1, nome: "leão", estante_id: 4 },
    { id: 1, nome: "leão", estante_id: 4 },
    { id: 1, nome: "leão", estante_id: 4 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
    { id: 1, nome: "leão", estante_id: 1 },
];

const bookPages = [
    {
        id: 1,
        conteudo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sunt commodi, totam minus harum accusamus dolores aliquid unde quas magnam amet minima! Amet odio, eligendi sapiente quaerat dolor similique architecto alias harum laudantium deserunt at dolore optio, suscipit non corrupti delectus qui, reiciendis neque totam asperiores tempore? Culpa pariatur sint officiis placeat quaerat odit tempora et, minus impedit incidunt nostrum delectus, facere quia quam fugit saepe corrupti aperiam necessitatibus eius perspiciatis sequi! Aliquid, tempora sit repudiandae molestiae placeat, repellendus consectetur aperiam laborum voluptas reiciendis magni? Atque nostrum rem dolor. Magni officiis ut dolorem eos unde dignissimos maxime non vero aliquid, nesciunt explicabo fugiat, nemo sapiente temporibus quo ipsum est ducimus? Ea itaque fugiat accusantium sit sapiente quo! Sint adipisci ad porro molestiae cum enim impedit, ratione harum suscipit ex ipsa inventore modi quis nulla nobis a accusamus sunt ipsum unde. Quisquam repudiandae consequuntur, quod aliquid nesciunt laudantium',
        imagem: "AJKLSDLK",
        topico: "habitat",
    },
    {
        id: 2,
        conteudo: "rteste",
        imagem: "AJKLSDLK",
        topico: "habitat",
    },
    {
        id: 3,
        conteudo: "vivie n sei onde",
        imagem: "AJKLSDLK",
        topico: "habitat",
    },
];

// Retorna um array com todas as estantes -> @author {Arthur}
router.get("/bookshelves", bookshelfController.getAllBookshelves);

// Retorna um array com todos os livros de uma estante específica-> @author {Arthur}
router.get("/bookshelves/:id/books", bookController.readAllBooksOnShelf)

// Retorna um array com todas as páginas de um livro específico -> @author {Arthur}
router.get("/books/:id", pageController.getAllPagesFromBook)

// Cria uma estante nova -> @author {Arthur}
router.post("/bookshelves", bookshelfController.createBookshelf);
// {
//     'name': 'nome da estante' -> String
// }

// Cria um livro novo -> @author {Arthur}
router.post("/book", bookController.createBook);
// {
//     'bookTitle': 'nome do livro', -> String
//     'bookshelfName': 'nome da estante', -> String
//     'userName': 'nome do usuário' -> String,
//     'coverImage': 'nome da imagem' -> String
// }

//Criar uma pagina nova
router.post("/book/page", pageController.createPage)
// {
//     bookID: id do livro, -> Int
//     topicName: id do topico, -> String
//     content: "conteudo", -> String
//     image: "nome da imagem", -> String
//     authorName: nome do autor -> String
// }

// Apaga uma estante
// router.delete()

// Apaga um livro
// router.delete()

// Apaga uma pagina
// router.delete()

// Atualiza um livro
// router.put()

// Atualiza um livro
// router.put()

// Atualiza uma pagina
// router.put()

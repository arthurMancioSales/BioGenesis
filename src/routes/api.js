// @author: {Arthur}
import { Router } from "express";
import * as bookshelfController from "../controllers/bookshelfController.js";
import * as bookController from "../controllers/bookController.js";
import * as pageController from "../controllers/pageController.js";
import * as userController from "../controllers/userController.js";
import authenticateUser from "../lib/authenticateUser.js";

export const router = Router();

// Retorna um array com todas as estantes -> @author {Arthur}
router.get("/bookshelves", bookshelfController.getAllBookshelves);

// Retorna um array com todos os livros de uma estante específica-> @author {Arthur}
router.get("/bookshelves/:id/books", bookController.readAllBooksOnShelf);

// Retorna um array com todas as páginas de um livro específico -> @author {Arthur}
router.get("/books/:id", pageController.getAllPagesFromBook);

// Retorna um array com todos os livros -> @author {Arthur}
router.get("/books", bookController.getAllBooks);

// Cria uma estante nova -> @author {Arthur}
router.post("/bookshelves", authenticateUser, bookshelfController.createBookshelf);
// {
//     'name': 'nome da estante' -> String
// }

// Cria um livro novo -> @author {Arthur}
router.post("/book", authenticateUser, (req, res, next) => {
    bookController.createBook(req, res, next);
});
// {
//     'bookTitle': 'nome do livro', -> String
//     'bookshelfName': 'nome da estante', -> String
//     'userName': 'nome do usuário' -> String,
//     'coverImage': 'nome da imagem' -> String
// }

//Criar uma pagina nova
router.post("/book/page", authenticateUser, pageController.createPage);
// {
//     bookID: id do livro, -> Int
//     topicName: id do topico, -> String
//     content: "conteudo", -> String
//     image: "nome da imagem", -> String
//     authorName: nome do autor -> String
// }

// Apaga uma estante
router.delete("/bookshelves/:id")

// Apaga um livro
// router.delete()

// Apaga uma pagina
// router.delete()

// Atualiza uma estante
// router.put()

// Atualiza um livro
// router.put()

// Atualiza uma pagina
// router.put()

// Cria um usuário novo -> @author {Arthur}
router.post("/createUser", authenticateUser, userController.createUser);

// Atualiza um usuário -> @author {Arthur}

// Apaga um usuário -> @author {Arthur}

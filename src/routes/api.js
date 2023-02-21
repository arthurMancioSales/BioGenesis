// @author: {Arthur}
import { Router } from "express";
import * as bookshelfController from "../controllers/bookshelfController.js";
import * as bookController from "../controllers/bookController.js";
import * as pageController from "../controllers/pageController.js";

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
router.post("/book/page", pageController.createPage);
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

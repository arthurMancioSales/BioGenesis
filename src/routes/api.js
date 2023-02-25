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
router.post(
  "/bookshelves",
  authenticateUser,
  bookshelfController.createBookshelf
);
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

//Criar uma pagina nova -> @author {Arthur}
router.post("/book/page", authenticateUser, pageController.createPage);
// {
//     bookID: id do livro, -> Int
//     topicName: id do topico, -> String
//     content: "conteudo", -> String
//     image: "nome da imagem", -> String
//     authorName: nome do autor -> String
// }

// Apaga uma estante -> @author {Arthur}
router.delete(
  "/bookshelves/:id",
  authenticateUser,
  bookshelfController.deleteBookshelf
);

// Apaga um livro
router.delete("/book/:id", authenticateUser, bookController.deleteBook);

// Apaga uma pagina
router.delete("/book/page/:id", authenticateUser, pageController.deletePage);

// Atualiza uma estante -> @author {Arthur}
router.put(
  "/bookshelves/",
  authenticateUser,
  bookshelfController.updateBookshelf
);
// {
//     bookshelfID: "ID da estante",
//     newName: "novo nome da estante"
// }

// Atualiza um livro
router.put("/book", authenticateUser, bookController.updateBook);
// {
//     bookID: "ID do livro",
//     newName: "novo nome do livro"
// }

// Atualiza uma pagina
// router.put()

// Cria um usuário novo -> @author {Arthur}
router.post("/createUser", authenticateUser, userController.createUser);
// {
//     username: "nome do usuario",
//     email, "email do usuario",
//     password: "senha do usuario"
// }

// Atualiza um usuário -> @author {Arthur}

// Apaga um usuário -> @author {Arthur}

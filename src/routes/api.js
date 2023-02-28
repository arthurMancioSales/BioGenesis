// @author: {Arthur}
import { Router } from "express";
import * as bookshelfController from "../controllers/bookshelfController.js";
import * as bookController from "../controllers/bookController.js";
import * as pageController from "../controllers/pageController.js";
import * as userController from "../controllers/userController.js";
import authenticateUser from "../lib/authenticateUser.js";
import files from "../lib/upload.js";

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
router.post("/book", authenticateUser, bookController.createBook);
// {
//     'bookTitle': 'nome do livro', -> String
//     'bookshelfName': 'nome da estante', -> String
//     'userName': 'nome do usuário' -> String,
//     'coverImage': 'nome da imagem' -> String
// }

//Criar uma pagina nova -> @author {Arthur}
// router.post("/book/page", authenticateUser, pageController.createPage);
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
  "/bookshelves",
  authenticateUser,
  bookshelfController.updateBookshelf
);
// {
//     bookshelfID: "ID da estante",
//     newName: "novo nome da estante"
// }

// Atualiza uma pagina
// router.put("/book/page", authenticateUser, pageController.updatePage);
// {
//   topicId: 'nome do topico',
//   content: 'novo conteudo',
//   image: 'nova imagem',
//   editor: 'nome do editor',
//   pageID: 'id da pagina;
// }

// Cria um usuário novo -> @author {Arthur}
router.post("/createUser", authenticateUser, userController.createUser);
// {
//     username: "nome do usuario",
//     email, "email do usuario",
//     password: "senha do usuario"
// }

// Atualiza um usuário -> @author {Arthur}
router.post("/updateUser", authenticateUser, userController.updateUser);
// {
//     newUsername: "nome do usuario",
//     newEmail, "email do usuario",
//     newPassword: "senha do usuario"
// }

// Apaga um usuário (soft delete) -> @author {Arthur} @coauthor {Thiago}
router.delete("/deleteUser", authenticateUser, userController.deleteUser)

// Retorna quantos livros um usuário criou -> @author {Arthur} @coauthor {Thiago}
router.get("/userBooks", authenticateUser, bookController.getUserBooks)

// Rota para upload de de livro
router.post("/upload", authenticateUser, files, bookController.createBook);

// Atualiza um livro
router.put("/updateBook", authenticateUser, files, bookController.updateBook)

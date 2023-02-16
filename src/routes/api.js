// @author: {Arthur}
import { Router } from "express";
import * as bookshelfController from '../controllers/bookshelfController.js'

export const router = Router();

const bookshelfs = [{ id: 123, name: "animais terrestres" }];
const books = [{ id: 1, nome: "leão", estante_id: 123 }];
const bookPages = {
  id: 1,
  conteudo: "vivie n sei onde",
  imagem: "AJKLSDLK",
  topico: "habitat",
};

// Retorna um array com todas as estantes
router.get("/bookshelves", (req, res) => {
    res.json(bookshelfs);
});
// router.get('/bookshelves', bookshelfController.getAllBookshelves)

// Retorna um array com todos os livros
router.get("/bookshelves/:id/books", (req, res) => {
  req.body;
  res.json(books);
});

// Retorna um array com todas as páginas de um livro específico
router.get("/books/:id", (req, res) => {
  res.json(bookPages);
});

// Cria uma estante nova
router.post('/bookshelves', bookshelfController.createBookshelf)
// {
//     'name': 'nome da estante'
// }


// Cria um livro novo

//Criar uma pagina nova

// Apaga um livro
// router.post()

// Apaga uma pagina

// Atualiza um livro
// router.post()

// Atualiza uma pagina
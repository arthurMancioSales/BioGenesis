import { Router } from "express";

export const router = Router();

const bookshelfs = [{ id: 123, name: "animais terrestres" }];
const books = [{ id: 1, nome: "leão", estante_id: 123 }];
const bookPages = {
  id: 1,
  conteudo: "vivie n sei onde",
  imagem: "AJKLSDLK",
  topico: "habitat",
};

// pegar todas as estantes
router.get("/", (req, res) => {
  res.json(bookshelfs);
});

//Pega todos os livros
router.get("/:id/books", (req, res) => {
  req.body;
  res.json(books);
});

//Pega as páginas de um livro especifico
router.get("/books/:id", (req, res) => {
  res.json(bookPages);
});

//Criar um livro novo
// router.post()

//Criar uma estante nova

//Criar uma pagina nova

//Apagar um livro
// router.post()

//Apagar uma pagina

//Atualizar livro
// router.post()

//Atualizar pagina

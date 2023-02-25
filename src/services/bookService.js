//  @author {Arthur}
import * as bookRepository from "../repositories/bookRepository.js";
const TAG = "Bookshelf Service";

// Cria um livro novo -> @author {Arthur}
export async function createBook(
  bookTitle,
  bookshelfName,
  userName,
  coverImage,
  client
) {
  try {
    const dbResponse = await bookRepository.createBook(
      bookTitle,
      bookshelfName,
      userName,
      coverImage,
      client
    );
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at createBook()");
    throw error;
  }
}

// Retorna um array com todos os livros de uma estante -> @author {Arthur}
export async function readAllBooksOnShelf(bookshelfID) {
  try {
    const dbResponse = await bookRepository.readAllBooksOnShelf(bookshelfID);
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at readAllBooksOnShelf()");
    throw error;
  }
}

// Retorna um array com todos os livros -> @author {Arthur}
export async function getAllBooks() {
  try {
    const dbResponse = await bookRepository.getAllBooks();
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at getAllBooks()");
    throw error;
  }
}

export async function deleteBook(bookID) {
  try {
    const dbResponse = await bookRepository.deleteBook(bookID);
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at deleteBook()");
    throw error;
  }
}

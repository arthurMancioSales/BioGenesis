// @author: {Arthur}
import * as bookshelfRepository from "../repositories/bookshelfRepository.js";
const TAG = "Bookshelf Service";

// Cria uma estante nova -> @author {Arthur}
export async function createBookshelf(name) {
  try {
    const dbResponse = await bookshelfRepository.createBookshelf(name);
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at createBookshelf()");
    throw error;
  }
}

// Retorna um array com todas as estantes -> @author {Arthur}
export async function getAllBookshelves() {
  try {
    const dbResponse = await bookshelfRepository.getAllBookshelves();
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at getAllBookshelves()");
    throw error;
  }
}

// Apaga uma estante -> @author {Arthur}
export async function deleteBookshelf(bookshelfID) {
  try {
    const dbResponse = await bookshelfRepository.deleteBookshelf(bookshelfID);

    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at deleteBookshelf()");
    throw error;
  }
}

// Atualiza uma estante -> @author {Arthur}
export async function updateBookshelf(newName, bookshelfID) {
  try {
    const dbResponse = await bookshelfRepository.updateBookshelf(
      newName,
      bookshelfID
    );
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at updateBookshelf()");
    throw error;
  }
}

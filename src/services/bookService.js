//  @author {Arthur}
import * as bookRepository from '../repositories/bookRepository.js'
const TAG = "Bookshelf Service";

// Cria um livro novo -> @author {Arthur}
export async function createBook(bookTitle, bookshelfName, userName) {
    try {
        const dbResponse = await bookRepository.createBook(bookTitle, bookshelfName, userName)
        return dbResponse
    } catch (error) {
        console.log(TAG, "error caught at createBook()")
        throw error
    }
}
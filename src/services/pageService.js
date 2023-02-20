//  @author {Arthur}
import * as pageRepository from "../repositories/pageRepository.js";
const TAG = "Page Service";

// Cria uma página nova para um livro -> @author {Arthur}
export async function createPage(bookID, topicName, content, image, authorName) {
    try {
        const dbResponse = await pageRepository.createPage(
            bookID,
            topicName,
            content,
            image,
            authorName
        );
        return dbResponse;
    } catch (error) {
        console.log(TAG, "error caught at createPage()");
        throw error;
    }
}

// Retorna um array com todas as páginas de um livro específico -> @author {Arthur}
export async function getAllPagesFromBook(bookID) {
    try {
        const dbResponse = await pageRepository.getAllPagesFromBook(bookID)
        return dbResponse
    } catch (error) {
        console.log(TAG, "error caught at getAllPagesFromBook()");
        throw error
    }
}
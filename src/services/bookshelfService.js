// @author: {Arthur}
import * as bookshelfRepository from "../repositories/bookshelfRepository.js";

const TAG = "Bookshelf Service";

export async function createBookshelf(name) {
    try {
        const dbResponse = await bookshelfRepository.createBookshelf(name);
        return dbResponse;
    } catch (error) {
        console.log(TAG, "error caught createBookshelf()");
        throw error;
    }
}

export async function getAllBookshelves() {
    try {
        const dbResponse = await bookshelfRepository.getAllBookshelves()
        return dbResponse
    } catch (error) {
        console.log(TAG, "error caught getAllBookshelves()")
        throw error;
    }
}

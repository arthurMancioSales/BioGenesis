// @author: {Arthur}
import pool from './database.js'

const TAG = "Bookshelf Repository";

export async function createBookshelf(name) {
    try {
        const createQuery = `
            INSERT INTO bookshelves (
                name
            )
            VALUES (
                $1
            )
            ON CONFLICT (name) DO NOTHING`;
        const response = await pool.query(createQuery, [name]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught createBookshelf()");
        throw error;
    }
}

export async function getAllBookshelves() {
    try {
        const getQuery= `
            SELECT * FROM bookshelves`
        const response = await pool.query(getQuery)
        return response.rows
    } catch (error) {
        console.log(TAG, "error caught getAllBookshelves()");
        throw error;
    }
}

export async function getBookshelfBooks(bookshelfID) {
    try {
        const getBookQuery= `
        `
        const response = await pool.query(getBookQuery, [bookshelfID])
    } catch (error) {
        console.log(TAG, "Error caught getBookshelfBooks()")
        throw error
    }
}
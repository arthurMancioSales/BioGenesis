// @author: {Arthur}
import pool from "./database.js";

const TAG = "Bookshelf Repository";

// Cria uma estante nova -> @author {Arthur}
export async function createBookshelf(name) {
    try {
        const duplicateBookshelf = `
        SELECT 
            count(name)
        FROM 
            bookshelves
        WHERE 
            name = $1`;

        const duplicate = await pool.query(duplicateBookshelf, [name]);
        if (duplicate.rows[0].count == 1) {
            throw "Já existe uma esante com esse nome";
        }

        const createQuery = `
            INSERT INTO bookshelves (
                name
            )
            VALUES (
                $1
            )
            ON CONFLICT (name) DO NOTHING
            RETURNING *`;
        const response = await pool.query(createQuery, [name]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at createBookshelf()");
        throw error;
    }
}

// Retorna um array com todas as estantes -> @author {Arthur}
export async function getAllBookshelves() {
    try {
        const getQuery = `
            SELECT 
                bookshelf_id as id,
                name 
            FROM bookshelves`;
        const response = await pool.query(getQuery);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at getAllBookshelves()");
        throw error;
    }
}

// Retorna um array com todos os livros da estante -> @author {Arthur}
export async function getBookshelfBooks(bookshelfID) {
    try {
        const getBookQuery = `
        `;
        const response = await pool.query(getBookQuery, [bookshelfID]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at getBookshelfBooks()");
        throw error;
    }
}

// Apaga uma estante -> @author {Arthur}
export async function deleteBookshelf(bookshelfID) {
    try {
        const deleteBookshelfQuery = `
        DELETE FROM bookshelves 
        WHERE bookshelves.bookshelf_id = $1
`;

        const response = await pool.query(deleteBookshelfQuery, [bookshelfID]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at deleteBookshelf()");
        throw error;
    }
}

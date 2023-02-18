//  @author {Arthur}
import pool from "./database.js";
const TAG = "Books Repository";

// Cria um livro novo -> @author {Arthur}
export async function createBook(bookTitle, bookshelfName, userName) {
    try {
        const duplicateBook = `
        SELECT 
            count(name)
        FROM 
            books, bookshelves
        WHERE 
            book_name = $1 
        AND 
            bookshelves.name = $2`
        
        const duplicate = await pool.query(duplicateBook, [bookTitle, bookshelfName])
        if (duplicate.rows[0].count == 1) {
            throw "Já existe um livro com esse nome nessa estante"
        }

        const createBookQuery = `
        INSERT INTO books (
            bookshelf_id,
            book_name,
            author_id,
            created_at
        )
        SELECT 
            bookshelf_id,
            $1,
            user_id,
            NOW()
        FROM
            bookshelves,
            users
        WHERE
            bookshelves.name = $2 AND users.username = $3
        RETURNING *`;
        const response = await pool.query(createBookQuery, [
            bookTitle,
            bookshelfName,
            userName,
        ]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at createBook()");
        throw error;
    }
}

//  @author {Arthur}
import pool from "./database.js";
const TAG = "Books Repository";

// Cria um livro novo -> @author {Arthur}
export async function createBook(bookTitle, bookshelfName, userName) {
    try {
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

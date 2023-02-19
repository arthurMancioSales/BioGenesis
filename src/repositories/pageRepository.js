//  @author {Arthur}
import pool from "./database.js";
const TAG = "Page Repository";

// Cria uma página nova para um livro -> @author {Arthur}
export async function createPage(bookID, topicName, content, image, authorName) {
    try {
        const duplicatePageQuery = `        
        SELECT 
            count(content)
        FROM
            pages
        WHERE
            book_id = $1  AND topic_id = (SELECT topic_id FROM topic WHERE name = $2)`;

        const duplicate = await pool.query(duplicatePageQuery, [bookID, topicName]);
        if (duplicate.rows[0].count == 1) {
            throw "Já existe uma página com esse tópico no livro especificado";
        }

        const createPageQuery = `
        INSERT INTO pages (
            book_id,
            topic_id,
            content,
            image,
            author
        )
        VALUES (
            (SELECT book_id FROM books WHERE book_id = $1),
            (SELECT topic_id FROM topic WHERE name = $2),
            $3,
            $4,
            (SELECT user_id FROM users WHERE username = $5)
        )
        RETURNING *`;

        const response = await pool.query(createPageQuery, [
            bookID,
            topicName,
            content,
            image,
            authorName,
        ]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at createPage()");
        throw error;
    }
}

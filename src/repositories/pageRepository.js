//  @author {Arthur}
import pool from "./database.js";
const TAG = "Page Repository";

// Cria uma página nova para um livro -> @author {Arthur}
export async function createPage(
  bookID,
  topicName,
  content,
  image,
  authorName,
  client
) {
  try {
    const duplicatePageQuery = `        
        SELECT 
            count(content)
        FROM
            pages
        WHERE
            book_id = $1  AND topic_id = (SELECT topic_id FROM topic WHERE name = $2)`;

    const duplicate = await client.query(duplicatePageQuery, [
      bookID,
      topicName,
    ]);
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
    const response = await client.query(createPageQuery, [
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

// Retorna um array com todas as páginas de um livro específico -> @author {Arthur}
export async function getAllPagesFromBook(bookID) {
  try {
    const getPagesQuery = `        
        SELECT 
            pages.page_id,
            pages.content,
            pages.image,
            users.username,
            topic.name as topic_name,
            books.cover_image
            
        FROM 
            pages
        JOIN
            users ON pages.author = users.user_id
        JOIN
            topic ON pages.topic_id = topic.topic_id
        JOIN
            books ON pages.book_id = books.book_id
        WHERE
            pages.book_id = $1
        ORDER BY page_id ASC`;

    const response = await pool.query(getPagesQuery, [bookID]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at getAllPagesFromBook()");
    throw error;
  }
}

export async function deletePage(pageID) {
  try {
    const deletePageQuery = `
          DELETE FROM pages 
          WHERE pages.page_id = $1
          `;

    const response = await pool.query(deletePageQuery, [pageID]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at deletePage()");
    throw error;
  }
}

export async function updatePage(topic, content, image, editor, pageID) {
  try {
    const updateQuery = `
        UPDATE pages
        SET 
            topic_id = (SELECT topic_id FROM topic WHERE name = $1),
            content = $2,
            image = $3,
            editor = (SELECT user_id FROM users WHERE username = $4)
        WHERE
            pages.page_id = $5`;

    const response = await pool.query(updateQuery, [
      topic,
      content,
      image,
      editor,
      pageID,
    ]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at updatePage()");
    throw error;
  }
}

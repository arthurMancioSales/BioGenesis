//  @author {Arthur}
import pool from "./database.js";
const TAG = "Books Repository";

// Cria um livro novo -> @author {Arthur}
export async function createBook(
  bookTitle,
  bookshelfName,
  userName,
  coverImage,
  client
) {
  try {
    const duplicateBook = `
        SELECT 
            count(name)
        FROM 
            books, bookshelves
        WHERE 
            book_name = $1 
        AND 
            bookshelves.name = $2`;

    const duplicate = await client.query(duplicateBook, [
      bookTitle,
      bookshelfName,
    ]);
    if (duplicate.rows[0].count == 1) {
      throw "Já existe um livro com esse nome nessa estante";
    }

    const createBookQuery = `
        INSERT INTO books (
            bookshelf_id,
            book_name,
            author_id,
            created_at,
            cover_image
        )
        SELECT 
            bookshelf_id,
            $1,
            user_id,
            NOW(),
            $4
        FROM
            bookshelves,
            users
        WHERE
            bookshelves.name = $2 AND users.username = $3
        RETURNING *`;
    const response = await client.query(createBookQuery, [
      bookTitle,
      bookshelfName,
      userName,
      coverImage,
    ]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at createBook()");
    throw error;
  }
}

// Retorna um array com todos os livros de uma estante -> @author {Arthur}
export async function readAllBooksOnShelf(bookshelfID) {
  try {
    const readBooksQuery = `
        SELECT 
            book_id,
            book_name,
            username,
            created_at,
            updated_at
        FROM 
            books
        JOIN
            users ON users.user_id = books.author_id
        WHERE 
            bookshelf_id = $1`;

    const response = await pool.query(readBooksQuery, [bookshelfID]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at readAllBooksOnShelf()");
    throw error;
  }
}

// Retorna um array com todos os livros -> @author {Arthur}
export async function getAllBooks() {
  try {
    const getAllBooksQuery = `        
        SELECT 
            books.book_id,
            books.book_name,
            bookshelves.name as bookshelf_name,
            users.username as author
        FROM
            books
        JOIN
            bookshelves ON books.bookshelf_id = bookshelves.bookshelf_id
        JOIN
            users ON books.author_id = users.user_id`;

    const response = await pool.query(getAllBooksQuery);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at getAllBooks()");
    throw error;
  }
}

export async function deleteBook(bookID) {
  try {
    const deleteBookQuery = `
        DELETE FROM books 
        WHERE books.book_id = $1
        `;

    const response = await pool.query(deleteBookQuery, [bookID]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at deleteBook()");
    throw error;
  }
}

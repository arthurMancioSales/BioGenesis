import pool from "./database.js";
const TAG = "userRepository";

// Cria um usuário novo -> @author {Arthur}
export async function createUser(username, email, passwordHash) {
    try {
        const usernameDuplicateCheck = `
        SELECT
            count(username)
        FROM
            users
        WHERE 
            users.username = $1`;
        const userNameDuplicate = await pool.query(usernameDuplicateCheck, [
            username,
        ]);

        if (userNameDuplicate.rows[0].count == 1) {
            throw "Já existe um usuário com esse nome";
        }

        const emailDuplicateCheck = `
        SELECT
            count(users.username)
        FROM
            users
        WHERE 
            users.email = $1`;

        const emailDuplicate = await pool.query(emailDuplicateCheck, [email]);

        if (emailDuplicate.rows[0].count == 1) {
            throw "Já existe uma conta associada a esse email";
        }

        const createUserQuery = `
        INSERT INTO users (
            username,
            email,
            password
        )
        VALUES (
            $1,
            $2,
            $3
        )
        RETURNING
            username,
            email`;

        const response = await pool.query(createUserQuery, [
            username,
            email,
            passwordHash,
        ]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at createUser()");
        throw error;
    }
}

// Autentica um usuário -> @author {Arthur}
export async function logUser(username, email) {
    try {
        const passwordQuery = `
        SELECT
            password
        FROM
            users
        WHERE 
            users.username = $1 OR users.email = $2`;

        const response = await pool.query(passwordQuery, [username, email]);
        return response.rows;
    } catch (error) {
        console.log(TAG, "error caught at logUser()");
        throw error;
    }
}

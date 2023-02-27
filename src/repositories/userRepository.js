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
            *
        FROM
            users
        WHERE 
            users.username = $1 AND users.deleted = false OR users.email = $2 AND users.deleted = false`;

    const response = await pool.query(passwordQuery, [username, email]);
    return response.rows;
  } catch (error) {
    console.log(TAG, "error caught at logUser()");
    throw error;
  }
}

// Atualiza um usuário -> @author {Arthur} @coauthor {Thiago}
export async function updateUser(newUsername, newEmail, passwordHash, userID) {
  try {
    const usernameDuplicateCheck = `
    SELECT
            count(username)
    FROM
            users
    WHERE 
            users.username = $1 AND users.user_id <> $2`;
    const userNameDuplicate = await pool.query(usernameDuplicateCheck, [
      newUsername,
      userID,
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
            users.email = $1 AND users.user_id <> $2`;

    const emailDuplicate = await pool.query(emailDuplicateCheck, [
      newEmail,
      userID,
    ]);

    if (emailDuplicate.rows[0].count == 1) {
      throw "Já existe uma conta associada a esse email";
    }

    if (
      userNameDuplicate.rows[0].count == 0 &&
      emailDuplicate.rows[0].count == 0
    ) {
      const updateUserQuery = `
        UPDATE 
				users
                SET
				username = $1,
				email = $2,
				password = $3
			WHERE 
            users.user_id = $4`;

      const response = await pool.query(updateUserQuery, [
        newUsername,
        newEmail,
        passwordHash,
        userID,
      ]);
      return response;
    }

    return false;
  } catch (error) {
    console.log(TAG, "error caught at updateUser()");
    throw error;
  }
}

// Apaga um usuário (soft delete) -> @author {Arthur} @coauthor {Thiago}
export async function deleteUser(username) {
  try {
    const deleteUserQuery = `
        UPDATE users
        SET deleted = true
        WHERE username = $1`;
    const response = await pool.query(deleteUserQuery, [username]);
    return response;
  } catch (error) {
    console.log(TAG, "error caught at deleteUser()");
    throw error;
  }
}

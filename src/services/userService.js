import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";
import JWT from "jsonwebtoken";
import { config } from "dotenv";

config();

const TAG = "userService";

// Cria um usuário novo -> @author {Arthur}
export async function createUser(username, email, password) {
  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const dbResponse = await userRepository.createUser(
      username,
      email,
      passwordHash
    );
    return dbResponse;
  } catch (error) {
    console.log(TAG, "error caught at");
    throw error;
  }
}

// Autentica um usuário -> @author {Arthur}
export async function logUser(username, email, password) {
  try {
    const dbResponse = await userRepository.logUser(username, email);
    if (dbResponse.length == 0) {
      return false;
    }

    const login = await bcrypt.compare(password, dbResponse[0].password);

    if (login) {
      const sessionJWT = JWT.sign(
        {
          username: dbResponse[0].username,
          email: dbResponse[0].email,
          created_at: dbResponse[0].created_at,
          userID: dbResponse[0].user_id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "336h" }
      );
      return sessionJWT;
    } else {
      return false;
    }
  } catch (error) {
    console.log(TAG, "error caught at logUser()");
    throw error;
  }
}

// Retorna as informações presententes no cookie de sessão do usuário -> @author {Arthur}
export function getUserInfo(sessionCookie) {
  try {
    const userInfo = JWT.decode(sessionCookie);
    return userInfo;
  } catch (error) {
    console.log(TAG, "error caught at getUserInfo()");
    throw error;
  }
}

// Atualiza um usuário -> @author {Arthur} @coauthor {Thiago}
export async function updateUser(
  newUsername,
  newEmail,
  newPassword,
  sessionCookie
) {
  try {
    const passwordHash = await bcrypt.hash(newPassword, 10);
    const userInfo = JWT.decode(sessionCookie);

    await userRepository.updateUser(
      newUsername,
      newEmail,
      passwordHash,
      userInfo.userID
    );

    const sessionJWT = JWT.sign(
      {
        username: newUsername,
        email: newEmail,
        created_at: userInfo.created_at,
        userID: userInfo.userID,
      },
      process.env.JWT_SECRET,
      { expiresIn: "336h" }
    );

    return sessionJWT;
  } catch (error) {
    console.log(TAG, "error caught at updateUser()");
    throw error;
  }
}

// Apaga um usuário (soft delete) -> @author {Arthur} @coauthor {Thiago}
export async function deleteUser(sessionCookie) {
  try {
    const username = JWT.decode(sessionCookie).username;

    const dbReponse = await userRepository.deleteUser(username);
    return dbReponse;
  } catch (error) {
    console.log(TAG, "error caught at deleteUser()");
    throw error;
  }
}

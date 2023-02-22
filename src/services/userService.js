import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js";

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

export async function logUser(username, email, password) {
    try {
        const dbResponse = await userRepository.logUser(username, email)
        const login = await bcrypt.compare(password, dbResponse[0].password)
        return login
    } catch (error) {
        console.log(TAG, "error caught at logUser()");
        throw error
    }
}
// @author {Arthur}
import pool from "../repositories/database.js";

export default async function newBook() {
    try {
        const client = await pool.connect();
        await client.query("BEGIN");

        await client.query("COMMIT");
    } catch (error) {
        await client.query("ROLLBACK");
    } finally {
        await client.release();
    }
}

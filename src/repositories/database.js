// @author: {Arthur}
import pg from "pg";
import { config } from "dotenv";

//Carrega variáveis de ambiente
config();

//Instancia um novo pool de conexões
const pool = new pg.Pool({
    host: process.env.DBHOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.USER_PASSWORD,
    max: "20",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default pool;
import * as mysql from "mysql2";

export default mysql.createConnection({
    host: process.env.SQL_IP,
    user: process.env.USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB
});
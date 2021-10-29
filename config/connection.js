const mysql = require('mysql2');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'YungDev4Life!',
    database : 'company_db'
});

module.exports = db;
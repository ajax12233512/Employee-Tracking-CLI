const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host     : 'local',
    user     : 'neilj1213@outlook.com',
    password : 'YungDev4Life!'
})
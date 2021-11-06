const db = require('../config/connection');
const cTable = require('console.table');
const chalk = require('chalk');


function viewAllEmployees(){
    const home = require('./home.js');
    try{
        db.query('SELECT * FROM employee', (err, results) => {
            err ? console.log(err) : console.log("\n\nViewing all employees\n"); console.table(results); 
            home();
        });
    }
    catch(err)
    {
        console.log(err);
        home();
    }
}
module.exports = viewAllEmployees;

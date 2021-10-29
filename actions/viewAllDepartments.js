const db = require('../config/connection');
const cTable = require('console.table');

function viewAllDepartments(){
    const home = require('./home.js');
    try{
        db.query('SELECT * FROM department', (err, results) => {
            err ? console.log(err) : console.log('\n\nViewing all departments\n'); console.table(results);  
            home();
        });
    }
    catch(err)
    {
        console.log(err);
        home();
    } 
}

module.exports = viewAllDepartments;
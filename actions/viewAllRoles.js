const db = require('../config/connection');
const cTable = require('console.table');

async function viewAllRoles(){
    const home = require('./home.js');
    try{
        await db.query('SELECT * FROM employee_role', (err, results) => {
            err ? console.log(err) : console.log('\n\nViewing all roles\n'); console.table( results);  
            home();
        });
    }
    catch(err)
    {
        console.log(err);
        home();
    } 
}

module.exports = viewAllRoles;
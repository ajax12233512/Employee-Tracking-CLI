const inquirer = require("inquirer");
const db = require('../config/connection');

function addADepartment(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'Please Enter Name of New Department:'         
        }
    ]).then((answers) =>{
        const home = require('./home.js');
        let query = 'INSERT INTO department(department_name) VALUES (?)';
        db.query(query,[answers.newDepartment] ,(err, results)=>{
            (err) ? console.log(err) : console.log(`\n\nNew Department added: ${answers.newDepartment}\n`);
            home();
        });
    }).catch((err) =>{
        console.log(err);
        home();
    })
}

module.exports = addADepartment;

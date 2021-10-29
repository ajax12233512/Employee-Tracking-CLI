const inquirer = require("inquirer");
const db = require('../config/connection');

const newEmployeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Please Enter FIRST Name of New Employee:'         
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Please Enter LAST Name of New Employee:'        
    },
    {
        type: 'input',
        name: 'roleId',
        message: 'Please Enter Role ID of New Employee:'   
    }
];

function addAnEmployee(){
    inquirer
    .prompt(newEmployeeQuestions).then((answers) =>{
        const home = require('./home.js');
        let query = 'INSERT INTO employee(first_name, last_name, role_id) VALUES (?,?,?)';
        db.query(query,[answers.firstName, answers.lastName, answers.roleId] ,(err, results)=>{
            (err) ? console.log(err) : console.log(`\n\nNew Employee added: ${answers.firstName} ${answers.lastName}\n`);
            home();
        });
    }).catch((err) =>{
        console.log(err);
        home();
    })
}
module.exports = addAnEmployee;
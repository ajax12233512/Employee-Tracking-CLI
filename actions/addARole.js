const inquirer = require("inquirer");
const db = require('../config/connection');

const newEmployeeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please Enter Title of New Role:'         
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please Enter Salary of New Role:'        
    },
    {
        type: 'input',
        name: 'departmentId',
        message: 'Please Enter Department ID of New Role:'   
    }
];

function addAnRole(){
    inquirer
    .prompt(newEmployeeQuestions).then((answers) =>{
        const home = require('./home.js');
        let query = 'INSERT INTO employee_role(title, salary, department_id) VALUES (?,?,?)';
        db.query(query,[answers.title, answers.salary, answers.departmentId] ,(err, results)=>{
            (err) ? console.log(err) : console.log(`\n\nNew Role added: ${answers.title} ${answers.salary}\n`);
            home();
        });
    }).catch((err) =>{
        console.log(err);
        home();
    })
}

module.exports = addAnRole;
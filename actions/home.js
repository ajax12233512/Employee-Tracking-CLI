const inquirer = require("inquirer");
const viewAllDepartments = require('./viewAllDepartments');
const viewAllRoles = require('./viewAllRoles');
const viewAllEmployees = require('./viewAllEmployees');
const updateEmployeeRole = require('./updateEmployeeRole');
const addADepartment = require('./addADepartment');
const addARole = require('./addARole');
const addAnEmployee = require('./addAnEmployee');

// Prompt user for options they can choose
function home(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Please Choose an action below',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a deparment', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((answers) => {
        switch(answers.home){
            case 'View all departments': 
                viewAllDepartments();
                break;
            case 'View all roles': 
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break; 
            case 'Add a department': 
                addADepartment();
                break;
            case 'Add a role': 
                addARole();
                break;
            case 'Add an employee': 
                addAnEmployee();
                break;
            case 'Update and employee role': 
                updateEmployeeRole();
                break;
        }
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = home;
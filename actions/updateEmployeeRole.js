const inquirer = require("inquirer");

function updateEmployeeRole(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Please Choose an action below',
            choices: ['Update employee role']
        }
    ]);
}

module.exports = updateEmployeeRole;

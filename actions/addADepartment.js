const inquirer = require("inquirer");

function addADepartment(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Please Choose an action below',
            choices: ['Add a deparment']
        }
    ])
}

module.exports = addADepartment;

const inquirer = require("inquirer");

function addAnRole(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Please Choose an action below',
            choices: ['Add a role']
        }
    ]);
}

module.exports = addAnRole;
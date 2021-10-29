const inquirer = require("inquirer");

function addAnEmployee(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Please Choose an action below',
            choices: ['Add a employee']
        }
    ]);
}
module.exports = addAnEmployee;
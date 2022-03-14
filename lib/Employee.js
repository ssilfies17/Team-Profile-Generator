const inquirer = require("inquirer");

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return inquirer.prompt([
                {
                    type: 'input',
                    name:  'employee name',
                    message: 'Please enter the name of the Team Member you want to add.',
                },
            ]);
    };

    getId() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'employee ID',
                    message: 'Please enter employee ID number.',
                },
            ]);
    };

    getEmail() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'employee email',
                    massage: 'Please enter employee email address.',
                },
            ]);
    };

    getRole() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    choices: ['Manager', 'Engineer', 'Intern'],
                },
            ]);
    };

};


module.exports = Employee;
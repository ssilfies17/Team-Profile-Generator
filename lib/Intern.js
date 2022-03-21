const Employee = require('./Employee');
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(school) {
        super(Employee.name, Employee.id, Employee.email);
        this.school = school;
    }

    getSchool() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Please enter employees school.',
            },
        ]);
    }

    getRole() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Intern'],
            },
        ]);
    }
}

module.exports = Intern;
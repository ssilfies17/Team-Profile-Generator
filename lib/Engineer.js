const Employee = require('./Employee');
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(github) {
        super(Employee.name, Employee.id, Employee.email);
        this.github = github;
    }

    getGithub() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Please enter employees GitHub username.',
            },
        ]);
    }

    getRole() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Engineer'],
            },
        ]);
    }
};

module.exports = Engineer;
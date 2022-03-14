const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
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
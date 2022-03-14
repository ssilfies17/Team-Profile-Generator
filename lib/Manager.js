const { off } = require('process');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Manager'],
            },
        ]);
    };
}

module.exports = Manager;
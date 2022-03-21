const inquirer = require("inquirer");
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(Employee.name, Employee.id, Employee.email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    massage: 'Please enter employee office number.',
                },
            ]);
    };

    getRole() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Manager'],
            },
        ])
        .then((answers) => {
            const { role } = answers;

            if (role === 'Manager') {

                return role;

            } 
            
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log('Uh oh, an error occured.');
            } else {
                console.log('Uh oh, something major went wrong.');
            }
        });
    };
}

module.exports = Manager;
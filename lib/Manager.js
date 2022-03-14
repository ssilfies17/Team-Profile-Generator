const { off } = require('process');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
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
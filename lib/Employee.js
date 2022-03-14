const inquirer = require("inquirer");

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name:  'employee name',
                    message: 'Please enter the name of the Team Member you want to add.',
                },
        ])
    };

    getId() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'employee ID',
                    message: 'Please enter employee ID number.',
                },
        ])
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
            ])
            .then((answers) => {
                const { role } = answers;

                if (role === 'Manager') {

                    return role;

                } else if (role === 'Engineer') {

                    return role;

                } else if (role === 'Intern') {
                    
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

};


module.exports = Employee;
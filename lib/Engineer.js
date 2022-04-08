const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super(Employee.name, Employee.id, Employee.email);
        this.github = github;
        this.role = 'Engineer';
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Engineer;
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super(Employee.name, Employee.id, Employee.email);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
       return this.school;
    }

    getRole() {
       return this.role;
    }
}

module.exports = Intern;
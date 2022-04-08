const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(Employee.name, Employee.id, Employee.email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;
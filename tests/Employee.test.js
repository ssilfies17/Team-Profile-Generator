const Employee = require("../lib/Employee");

const employee = new Employee("Sawyer", 456, "ssilfies17@gmail.com");

describe("Employee class", () => {
    
    describe("getName method", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Tara");
        });
    });



});
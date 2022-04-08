const Employee = require("../lib/Employee");

const employee = new Employee("Sawyer", 456, "ssilfies17@gmail.com");

describe("Employee", () => {

    describe("getName", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Sawyer");
        });
    });

    describe("getId", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(456);
        });
    });

    describe("getEmail", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("ssilfies17@gmail.com");
        });
    });

    describe("getRole", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("Employee");
        });
    });

});
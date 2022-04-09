const Manager = require("../lib/Manager");

const employee = new Manager("Sawyer", 456, "ssilfies17@gmail.com", 123);

describe("Manager", () => {

    describe("getOfficeNumber", () => {
        it("returns the manager's office number", () => {
            expect(employee.getOfficeNumber()).toBe(123);
        });
    });
});
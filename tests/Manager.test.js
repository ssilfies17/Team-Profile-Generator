const Manager = require("../lib/Manager");

const employee = new Manager(5, "Sawyer", "ssilfies17@gmail.com", 123);

describe("Manager", () => {

    describe("getOfficeNumber", () => {
        it("returns the manager's office number", () => {
            expect(employee.getOfficeNumber()).toBe(123);
        });
    });
});
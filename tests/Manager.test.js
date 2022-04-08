const Manager = require("../lib/Manager");

const employee = new Manager(123);

describe("Manager", () => {

    describe("getOffice", () => {
        it("returns the manager's office number", () => {
            expect(employee.getOffice()).toBe(123);
        });
    });
});
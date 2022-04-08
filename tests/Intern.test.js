const Intern = require("../lib/Intern");

const employee = new Intern('University of Washington');

describe("Engineer", () => {

    describe("getSchool", () => {
        it("returns the Intern's school name", () => {
            expect(employee.getSchool()).toBe('University of Washington');
        });
    });
});
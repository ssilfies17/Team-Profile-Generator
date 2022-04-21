const Intern = require("../lib/Intern");

const employee = new Intern(1010, 'Michelle', 'michelle1010@gmail.com', 'University of Washington');

describe("Engineer", () => {

    describe("getSchool", () => {
        it("returns the Intern's school name", () => {
            expect(employee.getSchool()).toBe('University of Washington');
        });
    });
});
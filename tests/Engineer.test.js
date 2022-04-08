const Engineer = require("../lib/Engineer");

const employee = new Engineer('ssilfies17');

describe("Engineer", () => {

    describe("getGithub", () => {
        it("returns the Engineer's Github username", () => {
            expect(employee.getGithub()).toBe('ssilfies17');
        });
    });
});
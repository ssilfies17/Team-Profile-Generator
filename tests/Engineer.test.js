const Engineer = require("../lib/Engineer");

const employee = new Engineer(456, 'Billy', 'billy123@gmail.com', 'billy123');

describe("Engineer", () => {

    describe("getGithub", () => {
        it("returns the Engineer's Github username", () => {
            expect(employee.getGithub()).toBe('billy123');
        });
    });
});
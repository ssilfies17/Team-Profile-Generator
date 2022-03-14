const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");

const teamMember = new Employee();

async function memberInfo () {
    console.log('compiling member info');

    const memberName = await teamMember.getName();
    console.log(memberName);
    const memberId = await teamMember.getId();
    console.log(memberId);
    const memberEmail = await teamMember.getEmail();
    console.log(memberEmail);
    const memberRole = await teamMember.getRole();

    if (memberRole === 'Manager') {
        const manager = new Manager(memberName, memberId, memberEmail);
    }
};

memberInfo();
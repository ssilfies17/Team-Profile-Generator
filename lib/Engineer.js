const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGitub() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Please enter employees GitHub username.',
            },
        ]);
    }

    getRole() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Engineer'],
            },
        ]);
    }
};

module.exports = Engineer;
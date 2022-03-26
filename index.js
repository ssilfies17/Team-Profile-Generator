const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const inquirer = require("inquirer");




function memberPrompt () {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'memberPrompt',
            message: 'Would you like to add a member to the Team?'
        },
    );
}

const teamMember = new Employee();

async function newMember () {
    

    console.log('compiling member info');

    const memberInfo = {
        Name: await teamMember.getName(),
        Id: await teamMember.getId(),
        Email: await teamMember.getEmail(),
        Role: await teamMember.getRole(),
    }
    console.log(memberInfo.Name);
    console.log(memberInfo.Id);
    console.log(memberInfo.Email);
    console.log(memberInfo.Role);

    if (memberInfo.Role == 'Manager') {
        const manager = new Manager (memberInfo.Name, memberInfo.Id, memberInfo.Email, memberInfo.Role);
    
        await manager.getOfficeNumber();

    } else if (memberInfo.Role == 'Engineer') {
        const engineer = new Engineer (memberInfo.Name, memberInfo.Id, memberInfo.Email, memberInfo.Role);

        await engineer.getGithub();

    } else if (memberInfo.Role == 'Intern') {
        const intern = new Intern (memberInfo.Name, memberInfo.Id, memberInfo.Email, memberInfo.Role);

        await intern.getSchool();
    };

    
};


const baseHtml= () => {
    `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Team Profile Generator</title>
    //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    //     <link href="/dist/style.css">
    // </head>
    // <body>
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //         <div class="container-md" style="justify-content: center;">
    //           <a class="navbar-brand" href="#" style="font-size: 40px;">Team Profile Generator</a>
    //         </div>
    //     </nav>
    //     <div class="card container" style="border: 2px solid black; display: flex; flex-wrap: wrap; justify-content: space-evenly; padding: 3rem;">
    //         
    //     </div>
    // </body>
    // </html>

    `
};

const start = () => {
    const prompt = memberPrompt()

    if(prompt == 'false')

    newMember()
      .then((answers) => fs.writeFileSync('/dist/index.html', baseHtml(answers)))
      .then(() => console.log('HTML successfully generated!'))
      .catch((err) => console.error(err));
};
  
start();


// memberPrompt();


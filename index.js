const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const inquirer = require("inquirer");


const questions = [
    {
      type: "input",
      name: "name",
      message: "Please enter employee name",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter employee email?",
    },
    {
      type: "list",
      name: "role",
      message: "Please select designated employee role",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "office",
      message: "Please enter employee office number",
      when: (ans) => ans.role === "Manager",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter employee github username?",
      when: (ans) => ans.role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter employee school",
      when: (ans) => ans.role === "Intern",
    },
];

function employeeSubClass(data) {
    const { name, id, email, github, school, officeNumber } = data;

    if (data.role === "Manager") {
      return new Manager(name, id, email, officeNumber);
    };

    if (data.role === "Engineer") {
      return new Engineer(name, id, email, github);
    };

    if (data.role === "Intern") {
      return new Intern(name, id, email, school);
    };

};

function createOutline(data) {
    const cards = [];
  
    for (const d of data) {
      const card = createEmployeeCard(d);
      cards.push(card);
    };
  
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="style.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-md" style="justify-content: center;">
              <a class="navbar-brand" href="#" style="font-size: 40px;">Team Profile Generator</a>
            </div>
        </nav>
    
        <div class="card container" style="border: 2px solid black; display: flex; flex-wrap: wrap; justify-content: space-evenly; padding: 3rem;">
            ${cards}
        </div>
    </body>
    </html>`;
};

function createEmployeeCard (employee) {

  const getUniqueProperty = () => {

    if (employee.role === "Engineer") {
      return employee.getGithub();
    }

    if (employee.role === "Intern") {
      return employee.getSchool();
    }

    if (employee.role === "Manager") {
      return employee.getOfficeNumber();
    }

    return "unexpected input";
  };
  
  const uniqueProperty = getUniqueProperty();

  return `<div class="card" style="width: 24rem;">
      <div class="card-body">
        <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted" style="text-align: center;">${employee.role}</h6>
        <ul class="card-text" style="list-style: none;">
            <li class="ID">ID: ${employee.id} </li>
            <li class="email">Email: ${employee.email} </li>
            <li class="uniqueProperty"> ${uniqueProperty} </li>
        </ul>
      </div>
    </div>`;
};

inquirer
  .prompt(questions)
  .then((data) => {

    fs.writeFileSync(
      `Team-Profile.html`,
      createOutline([employeeSubClass(data)])
    );

  })
  .catch((err) => {
      
    console.log(err);
  });
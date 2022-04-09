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
      name: "officeNumber",
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

function createEmployeeCard (employee) {

  const getUniqueProperty = () => {

    if (employee.role === "Manager") {
      return employee.getOfficeNumber();
    }

    if (employee.role === "Engineer") {
      return employee.getGithub();
    }

    if (employee.role === "Intern") {
      return employee.getSchool();
    }

    return "unexpected input";
  };
  
  const uniqueProperty = getUniqueProperty();
  
  console.log(uniqueProperty);
  
  return `
  <div class="card" style="width: 24rem; margin: 1rem; border: 2px solid #D3E1EE; background-color: #89AFD1;">
  <div class="card-body">
      <h5 class="card-title" style="text-align: center; font-size: 28px; color: #172A3B ;">${employee.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted" style="text-align: center;font-size: 22px; color: #172A3B">${employee.role}</h6>
      <ul class="card-text" style="list-style: none; font-size: 20px; color: #172A3B ;">
          <li class="ID">ID: ${employee.id} </li>
          <li class="email">Email: ${employee.email} </li>
          <li class="uniqueProperty">${uniqueProperty}: ${uniqueProperty}</li>
      </ul>
  </div>
</div>
`;
};

function createOutline(data) {
    const cards = [];
    console.log({data})
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
        <link href="./src/style.css">
    </head>
    <body class="bg-dark">

        <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
            <div class="container-md" style="justify-content: center; ">
              <a class="navbar-brand" href="#" style="font-size: 40px; color: #D3E1EE;">Team Profile Generator</a>
            </div>
        </nav>
    
        <div class="card container" style=" margin-top: 2rem; margin-bottom: 3rem; border: 2px solid #D3E1EE; background-color: #3F72A2; display: flex;  flex-direction: row; flex-wrap: wrap; justify-content: space-evenly; padding: 3rem;">
            ${cards}
        </div>
    </body>
    </html>`;
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
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const inquirer = require("inquirer");

const employeeArray = [];


const addTeamMembers = [
  {
      type: 'list',
      message: "Would you like to add an additional Team Member?",
      choices: ['Yes', 'No'],
      name: 'answer',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("Please select an answer from the choices provided.");
          }
          return true;
      }
  }
];

function askToAddTeamMembers() {inquirer
  .prompt(addTeamMembers)
  .then((input) => {
      if(input.answer == 'No') {
          console.log('Team Generation complete.');
          fs.writeFile('Team-Profile.html', `<!DOCTYPE html>
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
                  ${generateCards()}
              </div>
          </body>
          </html>`, function(err) {
              if (err) throw err;
              console.log('Team Profile ready to be viewed.');
          }
           )} else if (input.answer == 'Yes') {
          askRole();

      } 
    })
};
  


const roleQuestion = [
  {
      type: 'list',
      message: "Please select Team Member's role.",
      choices: ['Manager', 'Engineer', 'Intern'],
      name: 'role',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("Please select an answer from the choices provided.");
          }
          return true;
      }
  }
];


function askManager() {
  inquirer
      .prompt(managerQuestions)
      .then((response) => {
          console.log(response);

          const manager = new Manager(response.id, response.name, response.email, response.office);
          employeeArray.push(manager);
      })
      .then(askToAddTeamMembers)
};

const managerQuestions = [
  {
      type: 'input',
      message: "Enter Manager's name.",
      name: 'name',
      default: 'Sawyer',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A name is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Manager's ID number.",
      name: 'id',
      default: '3',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An ID is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Manager's office number.",
      name: 'office',
      default: '123',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An office number is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Manager's email address.",
      name: 'email',
      default: 'sawyer@gmail.com',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An email address is required.");
          }
          return true;
      }
  }
];


function askEngineer() {
  inquirer
      .prompt(engineerQuestions)
      .then((response) => {
          console.log(response);

          const engineer = new Engineer(response.id, response.name, response.email, response.github);
          employeeArray.push(engineer);
      })
      .then(askToAddTeamMembers)
};

const engineerQuestions = [
  {
      type: 'input',
      message: "Enter Engineer's name.",
      name: 'name',
      default: 'Sawyer',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A name is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Engineer's ID number.",
      name: 'id',
      default: '3',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An ID is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Engineer's email address.",
      name: 'email',
      default: 'sawyer@gmail.com',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An email address is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Engineer's GitHub username.",
      name: 'github',
      default: 'ssilfies17',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A  GitHub username is required.");
          }
          return true;
      }
  },

];


function askIntern() {
  inquirer
      .prompt(internQuestions)
      .then((response) => {
          console.log(response);

          const intern = new Intern(response.id, response.name, response.email, response.school);
          employeeArray.push(intern);
      })
      .then(askToAddTeamMembers)
};

const internQuestions = [
  {
      type: 'input',
      message: "Enter Intern's name.",
      name: 'name',
      default: 'Sawyer',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A name is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Intern's ID number.",
      name: 'id',
      default: '3',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An ID is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter Intern's email address.",
      name: 'email',
      default: 'sawyer@gmail.com',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("An email address is required.");
          }
          return true;
      }
  },

  {
      type: 'input',
      message: "Enter the Intern's school name.",
      name: 'school',
      default: 'Unversity of Washington',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A  school name is required.");
          }
          return true;
      }
  },

];


function askRole() {
  console.log("Generating new Team Profile...");
  inquirer
      .prompt(roleQuestion)
      .then((input) => {
          console.log(input);

          if (input.role == 'Manager') {
            askManager();
          }; 
          
          if (input.role == 'Engineer') {
            askEngineer();
          };
          
          if (input.role == 'Intern') {
            askIntern();
          };
      })   
};


function generateCards() {
  return employeeArray.map((employee) => {
      return generateCard(employee);
  }).join("");
};

function generateCard(employee) {
  let uniqueProperty = "";
  let employeeRole = "";


  if (employee instanceof Manager) {
      uniqueProperty = `Office: ${employee.getOfficeNumber()}`;
      employeeRole = "Manager";

  } else if (employee instanceof Engineer) {
      uniqueProperty = `GitHub: <a target="_blank" href="https://www.github.com/${employee.getGithub()}" class="card-link"> ${employee.getGithub()}</a>`;
      employeeRole = "Engineer";

  } else if (employee instanceof Intern) {
      uniqueProperty = `School: ${employee.getSchool()}`;
      employeeRole = "Intern";
  }

    return `
    <div class="card" style="width: 24rem; margin: 1rem; border: 2px solid #D3E1EE; background-color: #89AFD1;">
    <div class="card-body">
        <h5 class="card-title" style="text-align: center; font-size: 28px; color: #172A3B ;">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted" style="text-align: center;font-size: 22px; color: #172A3B">${employeeRole}</h6>
        <ul class="card-text" style="list-style: none; font-size: 20px; color: #172A3B ;">
            <li class="ID">ID: ${employee.getId()} </li>
            <li class="email">Email: ${employee.getEmail()} </li>
            <li class="uniqueProperty">${uniqueProperty}</li>
        </ul>
    </div>
  </div>
  `;
}


askToAddTeamMembers()

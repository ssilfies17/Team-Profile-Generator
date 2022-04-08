const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require('fs');
const inquirer = require("inquirer");


const questions = [
    {
      name: "name",
      question: "Please enter employee name",
      type: "input",
    },
    {
      name: "id",
      question: "Please enter employee ID",
      type: "input",
    },
    {
      name: "email",
      question: "Please enter employee email?",
      type: "input",
    },
    {
      name: "role",
      question: "Please enter designated employee role",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      name: "office",
      question: "Please enter employee office number",
      type: "input",
      when: (ans) => ans.role === "Manager",
    },
    {
      name: "github",
      question: "Please enter employee github username?",
      type: "input",
      when: (ans) => ans.role === "Engineer",
    },
    {
      name: "school",
      question: "Please enter employee school",
      type: "input",
      when: (ans) => ans.role === "Intern",
    },
  ];
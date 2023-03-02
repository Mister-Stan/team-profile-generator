const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team manager's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNumber",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the team intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team intern's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team intern's school?",
    name: "school",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the team engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team engineer's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team engineer's github?",
    name: "github",
  },
];

// create empty array to store employee objects
const employees = [];

// prompt user to enter info for a manager
function promptManager() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const manager = new Manager(
      "Manager", 
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );

    // add manager object the array
    employees.push(manager);
    console.log(`\nManager ${manager.getName()} added to the team.\n`);
   
    promptNextAction();
  });
}

// prompt user to enter info for a intern
function promptIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const intern = new Intern(
      // role
      "Intern", 
      internAnswers.name,
      internAnswers.id,
      internAnswers.email,
      internAnswers.school
    );

    employees.push(intern);
    console.log(`\nIntern ${intern.getName()} added to the team.\n`);
    
    promptNextAction();
  });
}

// prompt user to enter info for a engineer
function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const engineer = new Engineer(
      "Engineer", 
      engineerAnswers.name,
      engineerAnswers.id,
      engineerAnswers.email,
      engineerAnswers.github
    );

    employees.push(engineer);
    console.log(`\nEngineer ${engineer.getName()} added to the team.\n`);
   
    promptNextAction();
  });
}

// Prompt user to select next action
function promptNextAction() {
    const questions = [
      {
        type: "list",
        message: "What would you like to do next?",
        choices: [
          "Add a Manager",
          "Add an Intern",
          "Add an Engineer",
          "Finish building my team",
        ],
        name: "nextAction",
      },
    ];

    inquirer.prompt(questions).then((answer) => {
      // check the user's response and call the functions
      if (answer.nextAction === "Add an Engineer") {
        promptEngineer();
      } 
      else if (answer.nextAction === "Add an Intern") {
        promptIntern();
      } 
      else if (answer.nextAction === "Add a Manager") {
        promptManager();
      }
      // if the user chooses to finish building the team, generate the HTML file
      else {
        console.log("Building team HTML file...");
        const html = render(employees);
        fs.writeFile(outputPath, html, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Team profile page generated at ${outputPath}.`);
          }
        });
      }
    });
  }

promptNextAction();  

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Name Your Project.",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description of what, why and how.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "credits",
      message: "List your collaborators.",
    },
    {
      type: "input",
      name: "license",
      message: "Add a license.",
    },
    {
      type: "input",
      name: "badges",
      message: "Select a Badge.",
    },
    {
      type: "input",
      name: "features",
      message: "If your project has features list them here.",
    },
    {
      type: "How to Contribute",
      name: "title",
      message:
        "If you would like other developers contributions, list step by step.",
    },
    {
      type: "input",
      name: "Tests",
      message: "Write tests for your application.",
    },
  ])
  .then((answers) => {
    if (answers.license === "MIT") {
      answers.licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers.license === "Apache 2.0") {
      answers.licenseBadge =
        "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
    } else if (answers.license === "GPL 3.0") {
      answers.licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

      const markDownAnswers = generateMarkdown(answers);

      // TODO: Create a function to write README file
      fs.writeFileSync(`README.md`, markDownAnswers, "utf-8");
      console.log("Your Readme has been generated!");
    }
  });



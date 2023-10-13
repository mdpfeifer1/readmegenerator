// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name Your Project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of what, why and how.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Add a license.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Name Your Project.'
    },   
    {
        type: 'input',
        name: 'title',
        message: 'Name Your Project.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has features list them here.'
    },
    {
        type: 'How to Contribute',
        name: 'title',
        message: 'If you would like other developers contributions, list step by step.'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for your application.'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

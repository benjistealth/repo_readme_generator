const fs = require("fs");
const util = require('util');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFile = util.promisify(fs.writeFile);

// questions for user
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the project in a  couple of sentences.',
        },
        {
            type: 'input',
            name: 'screenshot1',
            message: 'Describe screenshot1',
        },
        {
            type: 'input',
            name: 'screenshot1',
            message: 'Describe screenshot1',
        },
        {
            message: 'Select any of the following badges that you want to display: ',
            name: 'badges',
            type: 'checkbox',
            choices: ['Swimmers Badge', 'Medal of Honour', 'JS', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js',],
        },
        {
            type: 'input',
            name: 'githubPages',
            message: 'Enter your Github Pages URL',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What testing was carried out on the project?',
        },
    ]);

promptUser()
  // promises to handle async calls
  .then((readmeDetails) => writeToFile('readme.md', generateMarkdown(readmeDetails)))
  .then(() => console.log('Successfully created Readme.md with your information.'))
  .catch((err) => console.error(err));



// function to write README file
function writeToFile(fileName, readmeDetails) {
}

// function to initialize program
// function init() {

// }

// function call to initialize program
init();

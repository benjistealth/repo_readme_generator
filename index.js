const fs = require("fs");
// const util = require('util');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/utils/generateMarkdown');



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
            name: 'gituser',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'screenshot1',
            message: 'Describe screenshot1',
        },
        {
            type: 'input',
            name: 'screenshot2',
            message: 'Describe screenshot2',
        },
        {
            message: 'Select any of the following License badges that you want to display: ',
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
    //   promises to handle async calls
    .then((readmeDetails) => writeToFile(generateMarkdown(readmeDetails)))
    .then(() => console.log('Successfully created Readme.md'))
    .catch((err) => console.error(err));



// function to write README file
function writeToFile(readmeDetails) {
    // appendFile() takes in 3 arguments: path, data, and callback function
    fs.appendFile('readme.md', readmeDetails, (err) =>
        // Ternary operator takes in a condition followed by a question mark (?)
        // then an expression to execute if the condition is truthy followed by a colon (:)
        // and finally the expression to execute if the condition is falsy.
        // This operator is frequently used as a shortcut for the if statement.
        err ? console.error(err) : console.error("with the information provided.")
    );
}


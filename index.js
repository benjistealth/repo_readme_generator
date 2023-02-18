// importing modules
const fs = require("fs");
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
            name: 'installation',
            message: 'How is this installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does someone use it?',
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
            type: 'list',
            name: 'license',
            message: 'Choose a license from the list below.',
            choices: [
                'MIT',
                'GNU',
                'Mozilla',
                'Apache',
                'None'
            ]
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Enter your Github repo URL in short format e.g. /yourusername/yourproject/',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How do people contribute?',
        },
        {
            message: 'What technologies does this project use?',
            name: 'tech',
            type: 'checkbox',
            choices: ['HTML', 'BOOTSTRAP','css', 'NODE.JS', 'JS', 'MARKDOWN',]
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test the project?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'How do you test the project?',
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
        // error handling for file write
        err ? console.error(err) : console.log("with the information provided.")
    );
}


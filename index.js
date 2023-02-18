// importing modules
const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/utils/generateMarkdown');
// const emblems = require('./assets/utils/emblems');

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
            name: 'demolink',
            message: 'Would you like to include a video demo link?',
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
            message: 'Enter your Github Repo URL in short format e.g. /yourproject/',
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
            choices: [' HTML', ' Bootstrap',' CSS', ' Node.js', ' JavaScript', ' Markdown',]
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test the project?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who would you like to credit for helping you on this project?',
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
        // error handling for file write, also finishes sentence above on success
        err ? console.error(err) : console.log("with the information provided.")
    );
}


// function to generate markdown for README
function generateMarkdown(readmeDetails) {
  return `# ${readmeDetails.title}

A node.js app that generates a readme.md file from user input at the command line.

## Description

- ${readmeDetails.description}


## ${readmeDetails.screenshot1}

    
  <img alt="Screenshot_1" src="assets\images\screenshot2.png">


## ${readmeDetails.screenshot2}


  <img alt="Screenshot_2" src="assets\images\screenshot1.png">


## Installation

NA - Website hosted on Github Pages

https://benjistealth.github.io/benji_Console-Finances

## Usage

- Visit the page on Github pages, press F12 to open the console and see the financial info

https://benjistealth.github.io/benji_Console-Finances

## Credits

Some credit to Mozilla Developer Network and Stack Overflow for some help with Javascript functions

## License

MIT License - Please see a copy of this in the root of the repository


## Badges

NA

## Features

HTML, CSS, Javascript

## How to Contribute

NA

## Tests

Manual - Numerical accuracy checked with MS Excel


`;
}

module.exports = generateMarkdown;

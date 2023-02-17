// function to insert badge into markdown








// function to generate markdown for README
function generateMarkdown(readmeDetails) {
  return `# ${readmeDetails.projectTitle}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)
* [How to Contribute](#how-to-contribute)
* [Testing](#testing)

## Description

- ${readmeDetails.description}


## ${readmeDetails.screenshot1}

    
  <img alt="Screenshot_1" src="assets\images\screenshot2.png">


## ${readmeDetails.screenshot2}


  <img alt="Screenshot_2" src="assets\images\screenshot1.png">


## Installation

NA - Website hosted on Github Pages

https://benjistealth.github.io/${readmeDetails.githubPages}

## Usage

- Visit the page on Github pages, press F12 to open the console and see the financial info

https://benjistealth.github.io/${readmeDetails.githubPages}

## Credits

Some credit to Mozilla Developer Network and Stack Overflow for some help with Javascript functions

## License

MIT License - Please see a copy of this in the root of the repository


## Badges

# ${readmeDetails.githubPages}

## Features

HTML, CSS, Javascript, node.js

## How to Contribute

NA

## Tests

Manual - Numerical accuracy checked with MS Excel


`;
}

module.exports = generateMarkdown;

// function to insert badge into markdown

// const license = readmeDetails.license; not working but need to switch on this




// function to generate markdown for README
function generateMarkdown(readmeDetails) {
  const license = readmeDetails.license;
  const myOutputString = `Hi. You're using my page. You have selected
to use this license: ${generateLicenseString(license)}. That's a good choice.`;

  function generateLicenseString(license) {
    if (license !== undefined) {
      return `${getLicenseBadge(license)}`;
      // `${input} (a mighty good license)`;
    } else {
      return "No license selected.";
    }
  }
  console.log(myOutputString);


  function getLicenseBadge(license) {
    switch (license) {
      case "MIT":
        console.log("MIT License selected.");
        break;
      case "Apache":
        console.log("Apache License 2.0 selected.");
        break;
      case "Mozilla":
        console.log("Mozilla Public License 2.0 selected.");
        break;
      case "GNU":
        console.log("DNU Public License selected.");
        break;
      case "None":
        console.log("No License selected.");
        break;
      default:
        console.log("You have not chosen a license, NO LICENSE will be selected!");
        break;
    }
  }



  return `# ${readmeDetails.projectTitle}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description

- ${readmeDetails.description}


## ${readmeDetails.screenshot1}

    
  <img alt="Screenshot_1" src="assets\images\screenshot2.png">


## ${readmeDetails.screenshot2}


  <img alt="Screenshot_2" src="assets\images\screenshot1.png">


## Installation

${readmeDetails.installation}

https://github.com/benjistealth/${readmeDetails.repo}

## Usage

- ${readmeDetails.usage}

https://benjistealth.github.io/${readmeDetails.repo}

## Credits

Some credit to Mozilla Developer Network and Stack Overflow for some help with Javascript functions

## License

MIT License - Please see a copy of this in the root of the repository


## Badges

${readmeDetails.badges}

## Features

HTML, CSS, Javascript, node.js

## How to Contribute

# Please clone the repository and create a pull request with your changes

## Tests
 - How to test the project:

        ${readmeDetails.tests}

##Questions
If you have any questions about the repo, please open an issue.

${readmeDetails.gituser}

`;
}

module.exports = generateMarkdown;

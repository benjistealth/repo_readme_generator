
// function to generate markdown for README
function generateMarkdown(readmeDetails) {
  let license = readmeDetails.license;
  let badge = "";
  const myOutputString = `You have selected
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
        badge = "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)"
        return "MIT License";
        break;
      case "Apache":
        console.log("Apache License 2.0 selected.");
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        return "Apache License 2.0";
        break;
      case "Mozilla":
        console.log("Mozilla Public License 2.0 selected.");
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        return "Mozilla Public License 2.0";
        break;
      case "GNU":
        console.log("DNU Public License selected.");
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        return "GNU GPL v3";
        break;
      case "None":
        console.log("No License selected.");
        badge = "Selected - No License.";
        break;
      default:
        console.log("You have not chosen a license, None will be selected!");
        break;
    }
  }


  // return tempplate string with readme formatting with user input inserted into document
  return `# ${readmeDetails.projectTitle}

  ${badge}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)

* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Description

- ${readmeDetails.description}


## ${readmeDetails.screenshot1}

    
  <img alt="Screenshot_1" src="assets\images\screenshot2.png">


## ${readmeDetails.screenshot2}


  <img alt="Screenshot_2" src="assets\images\screenshot1.png">


## Installation

https://github.com/benjistealth/${readmeDetails.repo}

First clone the above repository

${readmeDetails.installation}



## Usage

- ${readmeDetails.usage}


## Contribute

 - ${readmeDetails.contribute}

## Credits

Some credit to Mozilla Developer Network and Stack Overflow for some help with Javascript functions

## Additional Credits

 - Additional credit to ${readmeDetails.credits}

## License

 - ${generateLicenseString(license)}

## Features

HTML, CSS, Javascript, node.js


## Tests
 - How to test the project:

 - ${readmeDetails.tests}

## Questions
If you have any questions about the repo, please open an issue.

 - ${readmeDetails.gituser}

 - https://github.com/benjistealth/${readmeDetails.repo}

`;
}

module.exports = generateMarkdown;

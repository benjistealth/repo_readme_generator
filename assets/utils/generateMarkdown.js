
// global variables
let licbadge = "";
// let techBadges = [];
let techBadge = "";
let readmeBadge = "";
// License badges in use
const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const mozBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const nolicBadge = "![License](https://img.shields.io/badge/No_License-No_License-red)";

// badges for each technology
const htmlBadge = "![License](https://img.shields.io/badge/Lang-HTML-yellow)";
const cssBadge = "![License](https://img.shields.io/badge/Lang-CSS-blue)";
const markdownBadge = "![License](https://img.shields.io/badge/Lang-Markdown-green)";
const nodeBadge = "![License](https://img.shields.io/badge/Lang-Node.js-orange)";
const bootstrapBadge = "![License](https://img.shields.io/badge/Lang-Bootstrap.js-pink)";
const jsBadge = "![License](https://img.shields.io/badge/Lang-JavaScript-purple)";

// function to generate markdown for README
function generateMarkdown(readmeDetails) {
  let license = readmeDetails.license;
  const myOutputString = `You have selected
to use this license: ${generateLicenseString(license)}.`;

  for (let i = 0; i < readmeDetails.tech.length; i++) {
    techBadge = readmeDetails.tech[i];
    if (techBadge === " HTML") { readmeBadge += htmlBadge; }
    if (techBadge === " CSS") { readmeBadge += cssBadge; }
    if (techBadge === " JavaScript") { readmeBadge += jsBadge; }
    if (techBadge === " Markdown") { readmeBadge += markdownBadge; }
    if (techBadge === " Node.js") { readmeBadge += nodeBadge; }
    if (techBadge === " Bootstrap") { readmeBadge += bootstrapBadge; }
  }

  if (readmeBadge.length < 4) { readmeBadge = "Unknown Technology!"; }


  function generateLicenseString(license) {
    if (license !== undefined) {
      return `${getLicenseBadge(license)}`;
    } else {
      return "No license selected.";
    }
  }
  console.log(myOutputString);

  function getLicenseBadge(license) {
    switch (license) {
      case "MIT":
        licbadge = mitBadge;
        return "MIT License";
        break;
      case "Apache":
        licbadge = apacheBadge;
        return "Apache License 2.0";
        break;
      case "Mozilla":
        licbadge = mozBadge;
        return "Mozilla Public License 2.0";
        break;
      case "GNU":
        licbadge = gnuBadge;
        return "GNU GPL v3";
        break;
      case "None":
        // licbadge = "Selected - No License.";
        licbadge = nolicBadge;
        break;
      default:
        console.log("You have not chosen a license, None will be selected!");
        licbadge = nolicBadge;
        break;
    }
  }


  // return tempplate string with readme formatting with user input inserted into document
  return `# ${readmeDetails.projectTitle}
                       
${licbadge}


## Table of Contents

* [Description](#description)
* [DemoVideo](#demovideo)
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Credits](#credits)
* [License](#license)
* [Technologies](#technologies)
* [Tests](#tests)
* [Questions](#questions)

## Description

- ${readmeDetails.description}

## Demo Video Example

 - ${readmeDetails.demolink}


## ${readmeDetails.screenshot1}

    
  <img alt="Screenshot_1" src="./assets/images/screenshot1.png">


## ${readmeDetails.screenshot2}


  <img alt="Screenshot_2" src="./assets/images/screenshot2.png">


## Installation

https://github.com/${readmeDetails.gituser}${readmeDetails.repo}

First clone the above repository

${readmeDetails.installation}


## Usage

- ${readmeDetails.usage}


## Contribute

 - ${readmeDetails.contribute}

## Credits

Credit to Mozilla Developer Network and Stack Overflow for some help with some technical issues.

## Additional Credits

 - Additional credit to ${readmeDetails.credits}

## License

 - This project is licensed under the ${licbadge} located in the root of the repository. 

## Technologies Used

 - ${readmeBadge}

## Tests
 - How to test the project:

 - ${readmeDetails.tests}

## Questions
If you have any questions about the repo, please open an issue.

 - Github Username - ${readmeDetails.gituser}

 - This Repo Issues - https://github.com/${readmeDetails.gituser}${readmeDetails.repo}issues/

`
}

module.exports = generateMarkdown;

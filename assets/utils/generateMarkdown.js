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
    case "cake":
        console.log("Yumsville! Black Forest!!!");
        break;
    case "ice cream":
        console.log("Ruh roh! Lactose intolerance!");
        break;
    case "fruit and nuts":
        console.log("You call that a dessert??!??");
        break;
    default:
        console.log("This better have a pile of butter and sugar in it.");
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
* [Tests](#testing)
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

## Tests carried out on the project

${readmeDetails.testing}

## Questions - Message me

${readmeDetails.gituser}

`;
}

module.exports = generateMarkdown;

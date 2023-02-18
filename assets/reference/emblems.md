![License](https://img.shields.io/badge/Lang-HTML-yellow)![License](https://img.shields.io/badge/Lang-CSS-blue)![License](https://img.shields.io/badge/Lang-Markdown-green)![License](https://img.shields.io/badge/Lang-Node.js-orange)![License](https://img.shields.io/badge/Lang-Bootstrap.js-pink)![License](https://img.shields.io/badge/Lang-JavaScript-purple)![License](https://img.shields.io/badge/No_License-No_License-red)

// const generateMarkdown = require('./generateMarkdown');
// badges in use
const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const mozBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
// make a custom badge
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

//test the badge maker
// ![License](https://img.shields.io/badge/badge-test-green)
// create a badge for each technology
const htmlBadge = "![License](https://img.shields.io/badge/Lang-HTML-yellow)";
const cssBadge = "![License](https://img.shields.io/badge/Lang-CSS-blue)";
const markdownBadge = "![License](https://img.shields.io/badge/Lang-Markdown-green)";
const nodeBadge = "![License](https://img.shields.io/badge/Lang-Node.js-orange)";
const bootstrapBadge = "![License](https://img.shields.io/badge/Lang-Bootstrap.js-pink)";
const jsBadge = "![License](https://img.shields.io/badge/Lang-JavaScript-purple)";
const nolicBadge = "![License](https://img.shields.io/badge/No_License-No_License-red)";

const badgeArray = [htmlBadge, cssBadge, markdownBadge, nodeBadge, bootstrapBadge, jsBadge, nolicBadge];
function badger(techBadges) {   // was getBadges() but badger() is way more funny :-D technically still works
    let longtechBadge = "";
    let techBadge = ""; 
    for (let i = 0; i < techBadges.length; i++) {
        let techBadge = techBadges[i];

        for (techBadge of badgeArray) {
            
            longtechBadge += badgeArray;
        }
    }
    return longtechBadge;
}
// maybe make this into a JS library and import it
// then assign variables to these rather long & ugly strings

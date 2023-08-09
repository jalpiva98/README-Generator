// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license}. ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.name}

## Description

${response.description}

## Table of contents

* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contribution] (#contribution)
* [Test] (#test)
* [Questions] (#questions)


## Installation
${response.installation}

## Usage
${response.usage}

## License
${renderLicenseSection(response.license)}

## Contribution
${response.contribution}

## Test
${response.test}

## Questions
If you have any questions, please feel free to reach out.

`;
}

module.exports = generateMarkdown;
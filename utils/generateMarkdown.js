// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'European Union Public License 1.1':
      return '[European Union Public License 1.1](https://opensource.org/licenses/EUPL-1.1)';
    case 'Creative Commons license family':
      return '[Creative Commons Licenses](https://creativecommons.org/licenses/)';
    default:
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
  const contactSection = response.contact ? `If you have any questions, please feel free to reach out @:\n${response.contact}` : 
  'If you have any questions, please feel free to reach out using the contact information provided above.';
  return `# ${response.name}

## Description

${response.description}

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)


## Installation
${response.installation}

## Usage

${response.usage}

${renderLicenseSection(response.license)}

## Contribution
${response.contribution}

## Test
${response.test}

## Questions
${contactSection}`;
}

module.exports = generateMarkdown;
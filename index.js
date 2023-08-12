// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs'); 
const { generateKey } = require('crypto');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Please provide a short description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do u use this app?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How do u install this project?', 
      name: 'installation',
    },
    {
        type: 'input',
        message: 'How do u contribute to this?', 
        name: 'contribution',
      },
    {
        type: 'list', 
        message: 'What type of license does your project have?',
        name: 'license',
        choices: [    
          'MIT',
          'Apache 2.0',
          'GPL 3.0',
          'European Union Public License 1.1',
          'Creative Commons license family',
          'Other',
          'None',
        ],
      },
      {
        type: 'input',
        message: 'Please provide instructions to try out your app', 
        name: 'test',
      }, 
      {
        type: 'input',
        message: 'How could someone reach u?', 
        name: 'contact',
      }, 
  ])

.then((response) => {
    const markdownContent = generateMarkdown(response);

// TODO: Create a function to write README file
fs.writeFile("README.md", markdownContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README has been created');
  });
});
// TODO: Create a function to initialize app
//function init(
//) 

// Function call to initialize app
//init();

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const renderHTML = require('./src/HTML/generateMarkDown');
const renderCSS = require('./src/CSS/generateCSS');

const DIST_DIR = path.resolve(__dirname, 'dist');
const outputHTML = path.join(DIST_DIR, 'index.html');
const outputCSS = path.join(DIST_DIR, 'style.css');


const newTeamArr = [];

const managerCreation = [

    // team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'nameOfManager',
        message: "Enter the Team Manager's name",
    },

    {
        type: 'input',
        name: 'idOfManager',
        message: "Enter the Team Manager's employee ID #",
    },

    {
        type: 'input',
        name: 'emailOfManager',
        message: "Enter the Team Manager's email",
    },

    {
        type: 'input',
        name: 'officeNumberOfManager',
        message: "Enter the Team Manager's office number",
    },
];

const newTeamMemberCreation = [

    // team manager’s name, employee ID, email address, and office number
    {
        type: 'list',
        name: 'role',
        message: "Select the role of this new team member",
        coices: ['Engineer', 'Intern', 'Finished building team'],
    },
];

const newEngineerCreation = [
    {
        type: 'input',
        name: 'nameOfEngineer',
        message: 'Enter the name of the Engineer',
    },

    {
        type: 'input',
        name: 'idOfEngineer',
        message: 'Enter the ID of the Engineer',
    },

    {
        type: 'input',
        name: 'emailOfEngineer',
        message: 'Enter the Email of the Engineer',
    },

    {
        type: 'input',
        name: 'githubOfEngineer',
        message: 'Enter the Github of the Engineer',
    },
];

const newInternCreation = [
    {
        type: 'input',
        name: 'nameOfIntern',
        message: 'Enter the name of the Intern',
    },

    {
        type: 'input',
        name: 'idOfIntern',
        message: 'Enter the ID of the Intern',
    },

    {
        type: 'input',
        name: 'emailOfIntern',
        message: 'Enter the Email of the Intern',
    },

    {
        type: 'input',
        name: 'schoolOfIntern',
        message: 'Enter the school of the Intern',
    },
];




function init() {
    console.log`
    Let's create your team,
    
    You will be prompted to create a Team Manager
    Then you will have the opportunity to create Engineer
    and Intern team members. When finished, exit the application
    and your team with all corresponding information will be
    created.
    
    Thank you`

    inquirer
        .prompt(managerCreation)
        .then(data => {
            const manager = new Manager(data.nameOfManager, data.idOfManager, data.emailOfManager, data.officeNumberOfManager);
            newTeamArr.push(manager);
            addNewMember();
        })

}

function addNewMember() {
    inquirer
        .prompt(newTeamMemberCreation)
        .then(selection => {
            switch (selection.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Finished building team':
                    generateHTML();
                    generateCSS();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(newEngineerCreation)
        .then(data => {
            const newEngineer = new Engineer(data.nameOfEngineer, data.idOfEngineer, data.emailOfEngineer, data.githubOfEngineer);
            newTeamArr.push(newEngineer);
            addNewMember();
        })
}


function addIntern() {
    inquirer
    .prompt(newInternCreation)
    .then(data => {
        const newIntern = new Intern(data.nameOfIntern, data.idOfIntern, data.emailOfIntern, data.schoolOfIntern);
        newTeamArr.push(newIntern);
        addNewMember();
    })
}

function generateHTML() {
    fs.writeFileSync(outputHTML, renderHTML(newTeamArr), 'utf-8')
}

function generateCSS() {
    fs.writeFileSync(outputCSS, renderCSS())
}

init();
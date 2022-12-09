const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const teamArr = [];

const managerCreation = [

    // team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'managerName',
        message: "What is the Team Manager's name?",
    },

    {
        type: 'input',
        name: 'managerId',
        message: "What is the Team Manager's employee ID #?",
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the Team Manager's email?",
    },

    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the Team Manager's office number?",
    },
];

const newTeamMemberCreation = [

    // team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'newRole',
        message: "What is the role of this new team member?",
        coices: ['Engineer', 'Inter', 'Finished building team'],
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


function addEngineer() {
    inquirer
        .prompt(newEngineerCreation)
        .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamArr.push(engineer);
            addNewMember();
        })
}


function addIntern() {
    inquirer
    .prompt(newInternCreation)
    .then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamArr.push(intern);
        addNewMember();
    })
}


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
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArr.push(manager);
            addNewMember();
        })

}

function addNewMember() {
    inquirer
        .prompt(newTeamMemberCreation)
        .then(selection => {
            switch (selection.newRole) {
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

function generateHTML() {
    fs.writeFileSync(outputPathHTML, renderFilesHTML(teamArr), 'utf-8')
}

function generateCSS() {
    fs.writeFileSync(outputPathCSS, renderFilesCSS())
}

init();
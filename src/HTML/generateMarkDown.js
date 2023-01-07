module.exports = newTeam => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>New Team</title>
        </head>
        <body>
            <header>
                <img id="headerIcon" src="../assets/img/Team.PNG">
                <h1>Team</h1>

            </header>
            <main>
                ${generateTeam(newTeam)}
            </main>
            <footer>
        
            </footer>
        </body>
        </html>
        `
};
const generateTeam = myTeam => {

    const generateManager = manager => {
        return `
    <div id="employee-card">
        <div id="card-header">
            <h2 id="employee-name">${manager.getName()}</h2>
            <div id="employee-role">
                <img id="icon" src="../assets/img/Manager.png">
                <h3 id="role">Manager</h3>
            </div>
        </div>
        <div id="card-info">
            <p><strong>ID:</strong> ${manager.getId()}</p>
            <p><strong>Email:</strong> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p><strong>Office Number:</strong> ${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `;
    };

    const generateEngineer = engineer => {
        return `
    <div id="employee-card">
        <div id="card-header">
            <h2 id="employee-name">${engineer.getName()}</h2>
            <div id="employee-role">
            <img id="icon" src="../assets/img/Engineer.png">
                <h3 id="role">Engineer</h3>
            </div>
        </div>
        <div id="card-info">
            <p><strong>ID:</strong> ${engineer.getId()}</p>
            <p><strong>Email:</strong> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p><strong>GitHub Link:</strong> <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
    </div>
    `;
    };

    const generateIntern = intern => {
        return `
    <div id="employee-card">
        <div id="card-header">
            <h2 id="employee-name">${intern.getName()}</h2>
            <div id="employee-role">
            <img id="icon" src="../assets/img/Intern.png">
                <h3 id="role">Intern</h3>
            </div>
        </div>
        <div id="card-info">
            <p><strong>ID:</strong> ${intern.getId()}</p>
            <p><strong>Email:</strong> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p><strong>School:</strong> ${intern.getSchool()}</p>
        </div>
    </div>
    `;
    };

    const htmlContent = [];

    htmlContent.push(myTeam
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        .join("")
    );
    htmlContent.push(myTeam
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    htmlContent.push(myTeam
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
    );

    return htmlContent.join("");
}
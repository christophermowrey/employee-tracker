const mysql = require ('mysql2');
const inquirer = require ('inquirer');
const consoleTable = require ('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '', //add your own password here! Don't use mine!!
        database: 'company_db'
    },
    console.log(`Connected to company_db.`)
);

const initQuestions = [
    {
        type: 'list',
        message: 'Choose an option?',
        name: "whatToDo",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    }
]

const addDepartment = [
    {
        type: 'input',
        message: 'Enter name of department you would like to add.',
        name: 'addDepartment',
    }
]

const addRole = [
    {
        type: 'input',
        message: 'Enter name of role you would like to add.',
        name: 'addRole', 
    }
]
const addEmployee = [
    {
        type: 'input',
        message: 'Enter first name of Employee you would like to add.',
        name: 'firstName', 
    },
    {
        type: 'input',
        message: 'Enter last name of Employee you would like to add.',
        name: 'lastName', 
    },
    {
        type: 'input',
        message: 'Enter role of Employee you would like to add.',
        name: 'employeeRole', 
    },
    {
        type: 'input',
        message: 'Enter Manager name of Employee you would like to add.',
        name: 'employeeManager', 
    },
]

const updateEmployee = [
    {
        type: 'list',
        message: 'Chose employee to update.',
        choices: [],
    },
]


function init () {

    console.log(`
    ***************
    EMPLOYEE TRACKER
    `)

    inquirer.prompt(initQuestions).then((response) => {
        if (response.whatToDo === "View all departments") {
            viewDepartment();
        }
        if (response.whatToDo === "View all roles") {
            viewRole();
        }
        if (response.whatToDo === "View all employees") {
            viewEmployee();
        }
        if (response.whatToDo === "Add a department") {
            console.log('Add a department')
            addDepartmentPrompt();
        }
        if (response.whatToDo === "Add a role") {
            console.log('add a role');
            addRolePrompt();
        }
        if (response.whatToDo === "Add an employee") {
            console.log('add an employee');
            addEmployeePrompt();
        }
    });
};

function viewDepartment() {
    db.query(`SELECT * FROM department `, function (err, result) {
        if (err) {
            console.error(err);
        }
        console.table(result);
        init();
    });
};

function viewRole() {
    db.query(`SELECT * FROM role `, function (err, result) {
        if (err) {
            console.error(err);
        }
        console.table(result);
        init();
    });
};

function viewEmployee() {
    db.query(`SELECT * FROM employee `, function (err, result) {
        if (err) {
            console.error(err);
        }
        console.table(result);
        init();
    });
};


function addDepartmentPrompt() {
    inquirer.prompt(addDepartment).then((response) => {

    })
};

function addRolePrompt() {
    inquirer.prompt(addRole).then((response) => {

    })

};

function addEmployeePrompt() {
inquirer.prompt(addEmployee).then((response) => {

})
}





init();
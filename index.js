// Imports
const inquirer = require("inquirer");
const mysql = require("mysql");

// SQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hardbut99?",
    multipleStatements: true
});

// Creates the appropriate database and tables if they have not already been created
function initialize() {
    connection.query(
        `CREATE DATABASE IF NOT EXISTS employeeDB;
        USE employeeDB;
        
        CREATE TABLE IF NOT EXISTS department (
            id INT AUTO_INCREMENT,
            name VARCHAR(30),
            PRIMARY KEY (id)
        );
        
        CREATE TABLE IF NOT EXISTS role (
            id INT AUTO_INCREMENT,
            title VARCHAR(30),
            salary DECIMAL(10,2),
            department_id INT NULL,
            PRIMARY KEY (id)
        );
                
        CREATE TABLE IF NOT EXISTS employee (
            id INT AUTO_INCREMENT,
            first_name VARCHAR(30),
            last_name VARCHAR(30),
            role_id INT,
            manager_id INT NULL,
            PRIMARY KEY (id)
        );`, function(err, res) {
            if (err) throw err;
            console.log("Welcome to the Employee Database.");
            mainBranch();
        });
}

// Prompt Functions
// =============================================================================================

// Branch Prompts
function mainBranch() {
    inquirer.prompt([
        {
            type: "list",
            message: "What will you do?",
            name: "mainChoice",
            choices: ["Add to Database", "View Database", "Update Database", "Exit"]
        }
    ]).then(function(response) {
        if (response.mainChoice === "Add to Database") {
            addBranch();
        } else if (response.mainChoice === "View Database") {
            viewBranch();
        } else if (response.mainChoice === "Update Database") {
            updateBranch();
        } else if (response.mainChoice === "Exit") {
            connection.end();
        };
    });
};

function addBranch() {
    inquirer.prompt([
        {
            type: "list",
            message: "What will you add to the database?",
            name: "addChoice",
            choices: ["Department", "Role", "Employee"]
        }
    ]).then(function(response) {
        if (response.addChoice === "Department") {
            addDepartment();
        } else if (response.addChoice === "Role") {
             addRole();
        } else if (response.addChoice === "Employee") {
            addEmployee();
        }
    });
};


// Add Prompts
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new department?",
            name: "newDept"
        }
    ]).then(function(response) {
        connection.query(
            `INSERT INTO department (name)
            VALUES (?);`, response.newDept, function(err, res) {
                if (err) throw err;
                console.log(`Added new department ${response.newDept} successfully.`);
                mainBranch();
            });
    });
};

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of the new role?",
            name: "newRole"
        },
        {
            type: "input",
            message: "What is the salary of the new role?",
            name: "newRoleSalary"
        },
        {
            type: "input",
            message: "What department does the new role belong to? (Will be 'null' if no matching department exists)",
            name: "newRoleDept"
        }
    ]).then(function(response) {

        // Finds the matching ID of the provided department name
        var newRoleDeptId;
        connection.query("SELECT * FROM department WHERE name = ?", response.newRoleDept, function(err, res) {
            if (err) throw err;
            console.log(res);
            if (res.length>0) {newRoleDeptId = res[0].id};
            console.log(newRoleDeptId);
            // Inserts new Role Including the corresponding department ID
            connection.query(
                `INSERT INTO role (title, salary, department_id)
                VALUES ('${response.newRole}', '${response.newRoleSalary}', '${newRoleDeptId}');`, function(err, res) {
                    if (err) throw err;
                    console.log(`Added new role ${response.newRole} successfully.`);
                    mainBranch();
            });
        });
        
        
    });
};

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    initialize();
});

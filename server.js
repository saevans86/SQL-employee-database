const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

let db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log(`Server running on port ${PORT}`);
promptUserMain();

async function promptUserMain() {
  try {
    let mainlist = await inquirer.prompt([
      {
        name: 'choice',
        message: 'What would you like to do?',
        type: 'list',
        choices: [
          'View all employees',
          'View departments',
          'View all roles',
          'Add department',
          'Add Role',
          'Add employee',
          'Update employee',
        ],
      },
    ]);
    // await allDept()

    switch (mainlist.choice) {
      case 'View all':
        db.query(
          `SELECT * FROM employees;`,

          (err, results) => {
            if (err) throw err;

            console.table(results);
            promptUserMain();
          }
        );
    }

    switch (mainlist.choice) {
      case 'View departments':
        db.query(
          `SELECT * FROM departments`,

          (err, results) => {
            if (err) throw err;

            console.table(results);
            promptUserMain();
          }
        );
    }
    switch (mainlist.choice) {
      case 'View all roles':
        db.query(
          `SELECT 
          departments.dept_name AS department_name,
          CONCAT(employees.firstname, ' ', employees.lastname) AS employee_name,
          roles.title AS title,
          roles.salary AS salary,
          CONCAT(managers.firstname, ' ', managers.lastname) AS manager_name
      FROM 
          employees
      JOIN 
          roles ON employees.role_id = roles.id
      JOIN 
          departments ON roles.department_id = departments.id
      LEFT JOIN 
          employees AS managers ON employees.manager_id = managers.id;`,

          (err, results) => {
            if (err) throw err;

            console.table(results);
            promptUserMain();
          }
        );
        break;
      //Break to switch to new function
    }
    await newDeptFunc();
    async function newDeptFunc() {
      switch (mainlist.choice) {
        case 'Add department':
          let { newDept, newSalary } = await inquirer.prompt([
            {
              name: 'newDept',
              message: 'Please enter the new department name.',
              type: 'input',
            },
            {
              name: 'newSalary',
              message: 'What is the salary for this new position',
              type: 'input',
            },
          ]);

          db.query(
            (newDept = `INSERT INTO departments (dept_name) VALUES ("${newDept}")`),
            (newSalary = `INSERT INTO roles (salary) VALUES (${newSalary});
          `),
            (err, results) => {
              if (err) throw err;
              console.error(err, results);
              console.log(newDept);
            }
          );
      }
    }
  } catch (error) {
    console.error('Error in prompt:', error);
  }
}

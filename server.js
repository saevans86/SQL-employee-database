const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kloof3369@',
  database: 'employees_db',
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  promptUser();
});
async function promptUser() {
  try {
    // const prompts = new prompt();
    let response = await inquirer.prompt([
      {
        name: 'choice',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['View', 'Edit', 'Add', 'Delete'],
      },
    ]);

    switch (response.choice) {
      case 'View':
        db.query(
          'SELECT departments.dept_name AS department_name, employees.first_name, employees.last_name AS employee_name, roles.title AS title, roles.salary AS salary FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id;',
          (err, results) => {
            if (err) throw err;

            console.table(results);
            promptUser();
          }
        );
        break;

      case 'Edit':
        let newResponse = await inquirer.prompt({
          name: 'edit',
          message: 'Who would you like to edit?',
          type: 'list',
          choices: [
            'SHANNA BANANA',
            'DANNA BANANA',
            'LANA BANANA',
            'HANNAH MONTANA',
          ],
        });
        newResponse = [newResponse.choice];
        db.query(
          'select from employees.first_name, employees.last_name AS employee_name;'
        );
        console.log(newResponse)
        {
          if (newResponse === '')
            inquirer.prompt([
              {
                message: ['what would you like to edit?'],
                choices: ['SALARY', 'NAME', 'TITLE', 'DEPARTMENT'],
              },
            ]);
          if (newResponse === 'NAME') {
            return db.query(
              'employees.first_name, employees.last_name AS employee_name'
            );
          }
        }

        break;

    }
  } catch (error) {
    console.error('Error in prompt:', error);
  }
}

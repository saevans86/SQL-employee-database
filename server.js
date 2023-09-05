const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
var hide = require('hide-secrets')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: '',
    database: '',
  },
  console.log(`Connected`)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 
});

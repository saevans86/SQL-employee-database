const express = require('express');
const mysql = require('mysql12');
const inquirer = require('nquirer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: 'Thisthing101',
    database: 'books_db',
  },
  console.log(`Connected to the books_db database.`)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
var hide = require('hide-secrets');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'pass@',
    database: 'employees_db',
  },
  console.log(`Connected`)
);

class department {
  constructor(finances, customerService, humanRes, leadership, srLeadership, executive) {
    this.finances = finances;
    this.customerService = customerService;
    this.humanRes = humanRes;
    this.leadership = leadership;
    this.srLeadership = srLeadership;
    this.executive = executive;
  }}
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
  app.use((req, res) => {
    res.status(404).end();
  });




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments  (
    id INT PRIMARY KEY,
    dept_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
  );


DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    departments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        dept_name VARCHAR(30)
    );

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT
    );

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(30),
        lastname VARCHAR(30),
        role_id INT,
        manager_id INT
    );
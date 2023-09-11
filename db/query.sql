SELECT 
    departments.dept_name AS department_name,
    CONCAT(employees.firstname, ' ', employees.lastname) AS employee_name,
    roles.title AS title, 
    roles.salary AS salary 
FROM 
    employees
JOIN 
    roles ON employees.role_id = roles.id
JOIN 
    departments ON roles.department_id = departments.id;
SELECT 
    departments.dept_name AS department_name, employees.first_name, employees.last_name AS employee_name, 
    roles.title AS title, 
    roles.salary AS salary 
FROM 
    employees
JOIN 
    roles ON employees.role_id = roles.id
JOIN 
    departments ON roles.department_id = departments.id;

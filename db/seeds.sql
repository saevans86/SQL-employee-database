INSERT INTO departments (id, dept_name)
VALUES (001, "FINANCES"),
(002, "CUSTOMER SERVICE"),
(003, "HUMAN RESOURCES"),
(004, "leadership"),
(005, "sr leadership"),
(006, "executive");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "accounts_receivable", "40000", 001),
(2, "customer service", "40000", 002),
(3, "team lead", "120000", 004),
(4, "supervisor", "120000", 004),
(5, "dept manager", "75000", 005),
(6, "hiring hr", "45000", 003),
(7, "benefits hr", "90000", 003),
(8, "director", "200000", 006),
(9, "financial officer", "210000", 006),
(10, "ceo", "250000", 006);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "SHANNA", "BANANA", 1, 4),
(2, "DANNA", "BANANA", 2, 4),
(3, "LANA", "BANANA", 3, 4),
(4, "HANNAH", "MONTANA", 4, 5),
(5, "STEVE", "BUCHANAN", 5, 6),
(6, "LUCI", "GONZALES", 6, 9),
(7, "FREDD", "FLINSTONE", 7, 9),
(8, "TOM", "WADDLESWORTH", 8, 10),
(9, "KAMMY", "KEY", 9, 10),
(10, "JAMAL", "EVANS", 10, null);
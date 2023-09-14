INSERT INTO
    departments (id, dept_name)
VALUES
    (1, "finances"),
    (2, "customer service"),
    (3, "human resources"),
    (4, "leadership"),
    (5, "sr leadership"),
    (6, "executive");

INSERT INTO
    roles (id, title, salary, department_id)
VALUES
    (1, "accounts_receivable", "40000", 1),
    (2, "customer service", "40000", 2),
    (3, "team lead", "45000", 4),
    (4, "supervisor", "65000", 4),
    (5, "dept manager", "75000", 5),
    (6, "hiring hr", "90000", 3),
    (7, "benefits hr", "90000", 3),
    (8, "director", "200000", 6),
    (9, "financial officer", "210000", 6),
    (10, "ceo", "250000", 6);

INSERT INTO
    employees (id, firstname, lastname, role_id, manager_id)
VALUES
    (1, "DAVID", "JENKINS", 1, 4),
    (2, "DANNA", "SHERLOCK", 2, 4),
    (3, "LANA", "WINTERS", 3, 4),
    (4, "HANNAH", "STEPHENSON", 4, 5),
    (5, "STEVE", "BUCHANAN", 5, 6),
    (6, "LUCI", "GONZALES", 6, 9),
    (7, "FREDD", "FLINSTONE", 7, 9),
    (8, "TOM", "WADDLESWORTH", 8, 10),
    (9, "KAMMY", "KEY", 9, 10),
    (10, "JAMAL", "EVANS", 10, 10);
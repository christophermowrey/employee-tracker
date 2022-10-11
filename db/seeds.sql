INSERT INTO department (department_name)
VALUES ("sales"),
       ("engineering"),
       ("finance"),
       ("legal");

INSERT INTO role (title, salary, department_id)
VALUES ("salesperson", "80000", 1),
       ("lead engineer", "150000", 2),
       ("software engineer", "120000", 2),
       ("account manager", "160000", 3),
       ("accountant", "125000", 3),
       ("legal team lead", "250000", 4),
       ("lawyer", "190000", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("jim", "smith", 1, 2),
       ("brett", "felsh", 2, 2),
       ("greg", "simon", 3, 1);


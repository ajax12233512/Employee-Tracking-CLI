USE company_db;

INSERT INTO department(department_name) VALUES
('Human Resources'),
('Management'),
('Grocery'),
('Sales'),
('Customer Service');

INSERT INTO employee_role(title, salary, department_id) VALUES
('Manager', 120000, 2),
('Software Engineer', 120000, 4),
('Software Lead', 120000, 2),
('Front-End Service', 120000, 1),
('Grocery Clerk', 120000, 3),
('Deli Manager', 120000, 2),
('Deli Clerk', 120000, 3),
('Salesworker', 120000, 4),
('Representative', 120000, 4);

INSERT INTO employee(first_name, last_name, role_id) VALUES
('Neil', 'Juanillo', 1),
('Bill', 'Cosby', 2),
('Rick', 'Measly', 3),
('Sean', 'Conner', 4),
('Trever', 'McMillan', 5),
('Timmy', 'Smith', 6),
('Carmelo', 'Anthony', 7),
('Pablo', 'Escobar', 8),
('Simon', 'Petersburg', 1),
('Quincy', 'Liverpool', 2),
('Reece', 'Pieces', 3);



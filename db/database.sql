CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE
  `employee` (
    `id` INT (11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `hire_date` DATE NOT NULL,
    `salary` DECIMAL(10, 2) NOT NULL,
    `department_id` INT (11)
  );

CREATE TABLE
  `department` (
    `id` INT (11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `location` VARCHAR(100) DEFAULT null,
    `phone_number` VARCHAR(15) DEFAULT null,
    `budget` DECIMAL(10, 2) DEFAULT null
  );

ALTER TABLE `employee` ADD FOREIGN KEY (`department_id`) REFERENCES `department` (`id`);

INSERT INTO
  department (name, location, phone_number, budget)
VALUES
  (
    'Human Resources',
    'New York',
    '123-456-7890',
    50000.00
  ),
  ('IT', 'San Francisco', '234-567-8901', 150000.00),
  ('Finance', 'Chicago', '345-678-9012', 100000.00),
  (
    'Marketing',
    'Los Angeles',
    '456-789-0123',
    70000.00
  ),
  ('Sales', 'Miami', '567-890-1234', 80000.00);
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(40) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("saxophone", "woodwind", 700, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("trumpet", "brass", 550, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("clarinet", "woodwind", 600, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cello", "string", 900, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("snare drum", "percussion", 350, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("djembe", "percussion", 150, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("trombone", "brass", 825, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flute", "woodwind", 400, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("guitar", "string", 795, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("violin", "string", 1100, 14);

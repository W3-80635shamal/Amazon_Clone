create database amazon_clone;
use amazon_clone;

CREATE TABLE user (
    id INTEGER PRIMARY KEY auto_increment,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO user (firstName, lastName, email, password)
     VALUES 
     ('Shamal', 'Ramavat', 'shamal@example.com', 'shamal123'),
     ('Sarita', 'Joshi', 'sarita@example.com', 'sarita456'),
     ('Vishwa', 'kapoor', 'vishwa@example.com', 'vishwa789');


-- CREATE TABLE categories (
--     category_id INT AUTO_INCREMENT PRIMARY KEY,
--     category_name VARCHAR(100) NOT NULL
-- );

-- INSERT INTO categories (category_name)
--      VALUES 
--      ('Electronics'),
--      ('Books'),
--      ('Clothing');

............................................................................................

CREATE TABLE products (
    product_id INTEGER PRIMARY KEY auto_increment,
    name VARCHAR(50),
    description VARCHAR(1024),
    price FLOAT,
    image VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, description, price, image) VALUES 
('Phone', 'High performance', 199.99, 'smartphone1.png'),
('Laptop pro', 'Powerful laptop with high-resolution display', 299.99, 'Lenovo.jpeg'),
('SmartPhone', 'Description for product3', 149.99, 'smartphone2.jpg'),
('Smart TV 4K', 'Ultra HD smart TV with built-in streaming', 499.99, 'smarttv.jpg'),
('Harry Potter Book Set', 'Complete collection of Harry Potter books', 199.99, 'book1.jpeg'),
('Coding Basics', 'Introduction to coding book for beginners', 299.99, 'book2.jpeg'),
('The Lord of the Rings Trilogy', 'Complete set of The Lord of the Rings books', 39.99, 'book3.jpg'),
('Men\'s Casual Shirt', 'Comfortable and stylish shirt', 499.99, 'mens_shirt.jpg'),
('Women\'s Summer Dress', 'Lightweight and comfortable dress for summer', 590.00, 'dress.jpg');

......................................................................................................

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id) REFERENCES user(id)
);

INSERT INTO orders (id, total_amount) VALUES
     (1, 719.98),
     (2, 19.99),
     (3, 49.98);

.....................................................................................................

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    id INT,
    product_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (id) REFERENCES user(id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO cart (id, product_id, quantity) VALUES
     (1, 1, 2),
     (1, 3, 1),
     (2, 2, 3);


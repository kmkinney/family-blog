--@block
SHOW DATABASES;

--@block
SHOW TABLES;

--@block create tables
CREATE TABLE users(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

--@block describing users
DESCRIBE blog_posts;

--@block create blog post table
CREATE TABLE blog_posts(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    publish_date DATE NOT NULL,
    post TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

--@block
CREATE TABLE photos(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    image_data MEDIUMBLOB NOT NULL,
    caption TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
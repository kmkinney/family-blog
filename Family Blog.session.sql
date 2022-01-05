SELECT * FROM users;

--@block
ALTER TABLE users
ADD COLUMN birthday DATE NOT NULL AFTER name;

--@block
DESCRIBE users;
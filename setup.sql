CREATE DATABASE bookDb;

CREATE USER 'bookWorm'@'localhost' IDENTIFIED BY 'password123';

GRANT ALL ON bookDb.* TO 'bookWorm'@'localhost';

USE bookDb;

CREATE TABLE books (
	id INT auto_increment,
    title VARCHAR(255) NOT NULL,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id)
);
  
CREATE TABLE genres (
	id INT auto_increment,
    genre VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id)
);

CREATE TABLE authors (
	id INT auto_increment,
    name VARCHAR(255),
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id)
);

CREATE TABLE booksauthors (
	id INT auto_increment,
    bookId INT,
    authorId INT,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id),
    FOREIGN KEY (bookId) REFERENCES books(id),
    FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE booksgenres (
	id INT auto_increment,
    bookId INT,
    genreId INT,
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id),
    FOREIGN KEY (bookId) REFERENCES books(id),
    FOREIGN KEY (genreId) REFERENCES genres(id)
);


INSERT INTO books (title) VALUES ('Dracula');
INSERT INTO books (title) VALUES ('The Picture of Dorian Gray');
INSERT INTO books (title) VALUES ('The Color Purple');

INSERT INTO authors (name) VALUES ('Bram Stoker');
INSERT INTO authors (name) VALUES ('Oscar Wilde');
INSERT INTO authors (name) VALUES ('Alice Walker');

INSERT INTO genres (genre) VALUES ('Fiction');
INSERT INTO genres (genre) VALUES ('Horror');
INSERT INTO genres (genre) VALUES ('Fantasy');
INSERT INTO genres (genre) VALUES ('Gothic');
INSERT INTO genres (genre) VALUES ('Historical Fiction');

INSERT INTO booksauthors (bookId, authorId) VALUES (1, 1);
INSERT INTO booksauthors (bookId, authorId) VALUES (2, 2);
INSERT INTO booksauthors (bookId, authorId) VALUES (3, 3);

INSERT INTO booksgenres (bookId, genreId) VALUES (1, 1), (1, 2), (1, 3);
INSERT INTO booksgenres (bookId, genreId) VALUES (2, 1), (2, 2), (2, 4), (2, 3);
INSERT INTO booksgenres (bookId, genreId) VALUES (3, 1), (3, 5);
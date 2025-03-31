/* NETTOYAGE DE LA BD */
DROP TABLE "User";

/* CREATION DES TABLES */

CREATE TABLE "User" (
    UserID INT NOT NULL UNIQUE,
    UserName TEXT NOT NULL,
    Password TEXT NOT NULL,
    Name TEXT NOT NULL,
    LastName TEXT NOT NULL,
    PRIMARY KEY(UserID)
);


/* INSERTION */

INSERT INTO User(UserID, UserName, Password, Name, LastName)
VALUES(1,"JohnTheGoat", "1234567", "John", "Deer" );
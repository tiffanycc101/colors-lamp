CREATE TABLE Colors (
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL DEFAULT '',
    UserID INT NOT NULL DEFAULT 0,
    PRIMARY KEY (ID)
);

INSERT INTO Colors (Name, UserID) VALUES
    ('Blue', 1),
    ('Red', 1),
    ('Green', 1),
    ('Blue', 2);
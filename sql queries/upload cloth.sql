-- upload cloth sql command
/*
-- Insert into Cloths table (the new cloth will automatically set to in_stock = false)
INSERT INTO Cloths (sid, brand, in_stock, price, sales, image) VALUES (?,?,0,?,0,?);

-- Generate corresponding Categories table 
(Since primary key cid is auto increment, the corresponding row's cid will be MAX(cid))
INSERT INTO Categories VALUES ((SELECT MAX(cid) a FROM Cloths),?,?);

-- Generate corresponding Sizes table 
(Since primary key cid is auto increment, the corresponding row's cid will be MAX(cid))
INSERT INTO Sizes VALUES ((SELECT MAX(cid) a FROM Cloths),0,0,0,0,0,0,0);
*/

-- Example:

SELECT Cloths.cid, sid, brand, in_stock, price, sales, image, gender, type FROM Cloths natural join Categories;

INSERT INTO Cloths (sid, brand, in_stock, price, sales, image) VALUES (300001,"Chanel",0,475.8,0,null);
INSERT INTO Categories VALUES ((SELECT MAX(cid) a FROM Cloths),"Male","Tops");
INSERT INTO Sizes VALUES ((SELECT MAX(cid) a FROM Cloths),0,0,0,0,0,0,0);

SELECT Cloths.cid, sid, brand, in_stock, price, sales, image, gender, type FROM Cloths natural join Categories;



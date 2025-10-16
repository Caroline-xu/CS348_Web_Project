-- find cloth sql command

-- Example:

-- All cloths
SELECT Cloths.cid, sid, brand, in_stock, price, sales, image, gender, type FROM Cloths natural join Categories;

-- All cloths with gender male
SELECT * FROM Cloths WHERE Cloths.cid in (SELECT cid FROM Categories WHERE gender = "Male");

-- All cloths with brand name include "Bulgari"
SELECT * FROM Cloths WHERE Cloths.brand like "%Bulgari%";

-- All cloths with brand name include "Bulgari" and gender male
SELECT * FROM Cloths WHERE Cloths.cid in (SELECT cid FROM Categories WHERE gender = "Male") and Cloths.brand like "%Bulgari%";


-- change price sql command
/*
UPDATE Cloths set price=? WHERE cid=?;
*/

-- Example:

SELECT * FROM Cloths;

UPDATE Cloths set price=1 WHERE cid=100001;

SELECT * FROM Cloths;

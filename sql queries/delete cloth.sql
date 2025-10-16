-- delete cloth sql command
/*
-- delete from cloth table
DELETE from Cloths WHERE cid=?;

-- delete corresponding row from Sizes table
DELETE from Sizes WHERE cid=?;

-- delete corresponding row from Categories table
DELETE from Categories WHERE cid=?;
*/

-- Example:

SELECT * FROM Cloths;

DELETE from Cloths WHERE cid=100001;
DELETE from Sizes WHERE cid=100001;
DELETE from Categories WHERE cid=100001;

SELECT * FROM Cloths;

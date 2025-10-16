--- user profile
UPDATE User SET first_name = 'abc' where uid = 1;
UPDATE User SET last_name = 'abc' where uid = 1;
UPDATE User SET birth = '2000-01-01' where uid = 1;
UPDATE User SET password = '12345abc' where uid = 1;
UPDATE User SET phone = 123456 where uid = 1;

--- add new row
INSERT INTO Users Values(200001,'Zpt','Ug', '1999-01-01' ,444,824182587, '70078@uwaterloo.ca');
INSERT INTO Payments Values(200001, 1000100010001000, '1999-01-01' , 'abc', 111);
INSERT INTO User_Address Values(200001, '200 University Ave W Waterloo ON N2L 3G1');

INSERT INTO Cloths Values(100001,300003,'Tiffany & Co.' , 'abc', FALSE,2755,0,NULL);
INSERT INTO Sizes Values(100001,0,0,0,0,0,0);
INSERT INTO Categories Values(100001, 'Male', 'Shorts');

INSERT INTO Shopping_Carts Values(200001, 100001, 'M')

INSERT INTO Sellers Values(300001, 'Happy',NULL,NULL,NULL, '200 University Ave W Waterloo ON N2L 3G1');

---下架衣服
UPDATE Cloths SET in_stock = False where sid = 1;

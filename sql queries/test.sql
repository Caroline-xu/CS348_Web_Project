INSERT INTO Users Values(200001,'Zpt','Ug', '1999-01-01' ,444,824182587, '70078@uwaterloo.ca');
INSERT INTO Users Values(200002,'L', 'Gfqjtsh', '2000-12-12', 7086,775658055,'04130@uwaterloo.ca');
INSERT INTO Users Values(200003,'Pdoc','Ftcmgz', '2001-01-02', 46675400,275326515, '87130@uwaterloo.ca');
INSERT INTO Users Values(200004, 'Tpkbb', 'J', '2002-01-01', 6533871586,156265787, '33686@uwaterloo.ca');
INSERT INTO Users Values(200005, 'Tkqxjzf', 'Xgx', '1998-10-10' ,375,147226803, '75616@uwaterloo.ca');

INSERT INTO Sellers Values(300001, 'Happy',NULL,NULL,0, '200 University Ave W Waterloo ON N2L 3G1');
INSERT INTO Sellers Values(300002, 'Happ',NULL,NULL,0, '201 University Ave W Waterloo ON N2L 3G1');
INSERT INTO Sellers Values(300003, 'Hap',NULL,NULL,0, '202 University Ave W Waterloo ON N2L 3G1');
INSERT INTO Sellers Values(300004, 'Ha' ,NULL,NULL,0, '203 University Ave W Waterloo ON N2L 3G1');
INSERT INTO Sellers Values(300005, 'H' ,NULL,NULL,0, '204 University Ave W Waterloo ON N2L 3G1');

INSERT INTO Cloths Values(100001,300003,'Tiffany & Co.' , 'abc', FALSE,2755,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100002,300003, 'Ralph Lauren', 'aaa', FALSE,2798,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100003,300004, 'Bulgari' , 'bbb', FALSE,973,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100004,300002, 'Herm√®s' , 'bbb', FALSE,2599,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100005,300002,'TAG Heuer' , 'bbb', FALSE,75,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100006,300001, 'Moncler' ,'bbb', FALSE,4308,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100007,300001, 'Dior' ,'bbb', FALSE,4695,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100008,300002, 'Tiffany & Co.' ,'bbb', FALSE,2791,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100009,300003, 'Puma' ,'bbb', FALSE,3206,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100010,300001, 'Cartier','bbb', FALSE,3552,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100011,300004, 'TAG Heuer','bbb', FALSE,1781,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100012,300002, 'Bulgari' ,'bbb', FALSE,1381,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100013,300002, 'Next' ,'bbb', FALSE,2937,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100014,300002, 'Adidas' ,'bbb', FALSE,2460,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100015,300003, 'Old Navy' ,'bbb', FALSE,3344,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100016,300002, 'The North Face' ,'bbb', FALSE,1670,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100017,300001, 'Bulgari' ,'bbb', FALSE,2247,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100018,300002, 'Fila' ,'bbb', FALSE,2103,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100019,300004, 'Primark / Penneys','bbb', FALSE,2883,0,'M', 'hat', 'url');
INSERT INTO Cloths Values(100020,300001, 'Chanel' ,'bbb', FALSE,918,0,'M', 'hat', 'url');


INSERT INTO Sizes Values(100001,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100002,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100003,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100004,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100005,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100006,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100007,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100008,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100009,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100010,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100011,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100012,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100013,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100014,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100015,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100016,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100017,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100018,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100019,0,0,0,0,0,0,0);
INSERT INTO Sizes Values(100020,0,0,0,0,0,0,0);

INSERT INTO User_Address Values(50001, 200001, '200 University Ave W Waterloo ON N2L 3G1');
INSERT INTO User_Address Values(50002, 200002, '200 University Ave W Waterloo ON N2L 3G1');
INSERT INTO User_Address Values(50003, 200003, '200 University Ave W Waterloo ON N2L 3G1');
INSERT INTO User_Address Values(50004, 200004, '200 University Ave W Waterloo ON N2L 3G1');
INSERT INTO User_Address Values(50005, 200005, '200 University Ave W Waterloo ON N2L 3G1');


INSERT INTO Transactions Values(600001, 200001, 100001,'M', Now());
INSERT INTO Transactions Values(600002, 200002, 100002,'S', Now());
INSERT INTO Transactions Values(600003, 200002, 100002,'S', Now());
INSERT INTO Transactions Values(600004, 200002, 100003,'S', Now());
INSERT INTO Transactions Values(600005, 200002, 100010,'S', Now());

INSERT INTO Shopping_Carts Values(200001, 100002,'M');
INSERT INTO Shopping_Carts Values(200002, 100002,'S');
INSERT INTO Shopping_Carts Values(200003, 100003,'XXL');
INSERT INTO Shopping_Carts Values(200004, 100004,'M');
INSERT INTO Shopping_Carts Values(200005, 100004,'M');
INSERT INTO Shopping_Carts Values(200006, 100005,'M');
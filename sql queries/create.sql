CREATE TABLE Cloths(
 cid int AUTO_INCREMENT PRIMARY KEY,
    sid int REFERENCES Seller(sid),
 brand varchar(255),
    in_stock boolean,
 price float NOT NULL,
 sales int,
    image varchar(255)
);

CREATE TABLE Sellers(
    sid int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) UNIQUE NOT NULL,
    average_price float,
    rating float,
    sales_volume int,
    address varchar(255) NOT NUll,
    password varchar(30) NOT NULL
); 

CREATE TABLE Users(
    uid int AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(20) NOT NULl,
    last_name varchar(20) NOT NULL,
    birth date NOT NULL,
    password varchar(30) NOT NULL,
    phone varchar(20) NOT NULl,
    email varchar(50) UNIQUE NOT NULL
);

CREATE TABLE Categories(
    cid int UNIQUE NOT NULL REFERENCES cloths(cid),
    gender varchar(20),
    type varchar(30)
);

CREATE TABLE User_Address(
    uid int REFERENCES Users(uid),
    address varchar(255) unique
);

CREATE TABLE Shopping_Carts(
    uid int REFERENCES Users(uid) ,
    cid int UNIQUE REFERENCES Cloths(cid),
    size varchar(3) NOT NULL
);

CREATE TABLE Transactions(
    uid int REFERENCES Users(uid),
    cid int REFERENCES Cloths(cid),
    size varchar(3) NOT NULL,
    time datetime
);

CREATE TABLE Sizes(
    cid int UNIQUE NOT NULL REFERENCES Cloths(cid),
    XS int unsigned,
    S int unsigned,
    M int unsigned,
    L int unsigned,
    XL int unsigned,
    XXL int unsigned,
    Total int unsigned
);

CREATE TABLE Payments(
    uid int REFERENCES Users(uid),
    card_number varchar(16) UNIQUE PRIMARY KEY,
    expiry_date date NOT NULL,
    cardholder varchar(300) NOT NULL,
    CVC int NOT NULL
);

CREATE TABLE Feedback (
    fb varchar(300)
);

-- INSERT INTO Cloths Values(100001,300003,'Tiffany & Co.' , 'abc', FALSE,2755,0,NULL);
-- DELETE FROM Cloths WHERE cid = 100001;

-- put on/ put off cloths，update saler's "avarage_price"
create trigger sellers_avg_price1
after insert on cloths
for each row 
update sellers set average_price = (select avg(price) from cloths where sid = new.sid group by sid) where sid = new.sid;

create trigger sellers_avg_price2
before delete on cloths
for each row 
update sellers set average_price = (select avg(price) from cloths where sid = old.sid group by sid) where sid = old.sid;

-- when a "seller" is deleted，also delete its "cloths"
create trigger delete_seller
after delete on Sellers
for each row 
delete from cloths where sid = old.sid;

-- when a cloth is deleted，also delete relative "Shopping_Carts", "Sizes"
DELIMITER $$
create trigger delete_cloth
after delete on cloths
for each row 
begin
delete from Shopping_Carts where cid = old.cid;
delete from Sizes where cid = old.cid;
end$$
DELIMITER ;

-- when a "user" is deleted，also delete relative "Shopping_Carts", “Payments”, “User_Address"
DELIMITER $$
create trigger delete_user
after delete on users
for each row 
begin
delete from Shopping_Carts where uid = old.uid;
delete from Payments where uid = old.uid;
delete from User_Address where uid = old.uid;
end$$
DELIMITER ;

-- After each "transaction"，update "cloth's" "sales" and "seller's" "sales_volumn"
DELIMITER $$
create trigger sales_update
after insert on Transactions
for each row 
begin
update cloths set sales = sales + 1 where cloths.cid = new.cid;
update sellers set sales_volume = sales_volume + 1 where sid = (select sid from  cloths where cid = new.cid);
end$$
DELIMITER ;

-- when a "cloth" is sold out , its "in_stock" becomes false
create trigger sold_out
after update on Sizes
for each row 
update cloths set in_stock = 0 where cloths.cid = new.cid and new.total = 0;

-- "total" column of "sizes"
create trigger sizes_total
before update on Sizes
for each row
set new.total = new.XS + new.S + new.M + new.L + new.XL + new.XXL;

-- INDEX
-- To boost the speed of searching
Create index cloth_idx1 on Cloths(cid, brand, price);

-- View
-- This view is used when a user's profile is viewed by another user
Create view other_user as 
    select uid, first_name, last_name from Users;
-- This view is used when a user's profile is viewed by the staff
Create view staff_user as 
    select uid, first_name, last_name, birth, phone, email from Users;

    


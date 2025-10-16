-- INSERT INTO Cloths Values(100001,300003,'Tiffany & Co.' , 'abc', FALSE,2755,0,NULL);
-- DELETE FROM Cloths WHERE cid = 100001;

-- put on/ put off cloths，update saler's "avarage_price"
create trigger sellers_avg_price1
after insert on cloths
for each row 
update sellers set average_price = (select avg(price) from cloths where sid = new.sid group by sid) where sid = new.sid;

create trigger sellers_avg_price2
after delete on cloths
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


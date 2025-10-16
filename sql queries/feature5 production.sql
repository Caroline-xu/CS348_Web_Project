SELECT * FROM 1toinf.Shopping_Carts;
SET SQL_SAFE_UPDATES = 0;
delete from cloths where cid = 100001;
delete from cloths where cid = 100003;
delete from cloths where cid = 100005;
delete from cloths where cid = 100007;
delete from cloths where cid = 100009;

select * from Shopping_Carts;
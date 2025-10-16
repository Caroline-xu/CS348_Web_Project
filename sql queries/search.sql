--- search for cloths
--- by name
select * from Cloths where name like '%input%' and price between 0 and 500;  ---价格区间
select * from Cloths where name like '%input%' and price between 0 and 500 and in_stock = True;  ---价格区间，且有货
select * from Cloths where name like '%input%' and price between 0 and 500 order by sales desc;   ---价格区间， 销量降序
select * from Cloths where name like '%input%' and price between 0 and 500 and in_stock = True order by sales desc;   ---价格区间，且有货, 销量降序
--- by brand 
select * from Cloths where brand like '%input%' and price between 0 and 500;  ---价格区间
select * from Cloths where brand like '%input%' and price between 0 and 500 and in_stock = True;   ---价格区间，且有货
select * from Cloths where brand like '%input%' and price between 0 and 500 order by sales desc;   ---价格区间， 销量降序
select * from Cloths where brand like '%input%' and price between 0 and 500 and in_stock = True order by sales desc;   ---价格区间，且有货, 销量降序
--- by category
select * from Cloths where cid in (select cid from Categories where type like '%input%');


--- search for Sellers
select * from Sellers where name like '%input%' order by average_price asc;
select * from Sellers where name like '%input%' order by average_price desc;
select * from Sellers where name like '%input%' order by rating desc;
select * from Sellers where name like '%input%' order by sales_volume desc;

--- search for Users
select * from Users where uid = 0;
select * from Users where first_name = 'input' and last name = 'input';
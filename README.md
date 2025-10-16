# CS348-Project 

## Instruction
Welcome to the CS348 project, `348 Project git` folder contains code for web application, `Generate Data` folder contains database and database generation code (detailed instruction is under `README.md` file inside folder) `sql queries` folder contains SQL code, and expected output for different features (detailed instruction is under `README.md` file inside folder)

## Generate "Production" Dataset
We have five files to create different production datasets. 

First, open a terminal under folder `Production Data` and type following：

    g++ -std=c++11 -o a.out generateCate.cpp

Then, you might want to put the output data into a `.csv` file, so keep type the following on the terminal:

    ./a.out > category.csv

Then, you will get the production data about the category which the size of data is 100000.

You will need to repeat this process for the other four files which are `generateCloth.cpp`, `generatePay.cpp`, `generateSize.cpp` and `generateUser.cpp`. You also need to change the output `.csv` file name each time running a different `.cpp` file in order to make sure the there are five different output datasets. The `generateCate.cpp` file contains the id, gender and the type name. The `generateCloth.cpp` file contains the cid, the seller id, brand name, sales volume, in stock or not, price range and picture. The `generatePay.cpp` file contains the payment id, number and customer's name. The `generateSize.cpp` file contains the id and the number of size. The `generateUser.cpp` file contains users' information which includes email address, id, name, passwords and so on.

## Loading data into mysql (only work with Mysql workbench):

1. Once the connections with mysql is established get into the connection and on the top left corner there is a button called "open a sql script file" in a new query tab. Click it and open the sql query called "create.sql" in the folder name "sql queries"
![Image text](https://github.com/Eddie123XXXX/CS348-Project/blob/new-main-Branch/img-folder/WechatIMG640.jpg).

2. The top left corner there is a button called "cerate a new schema in the connected server". Click it and name the schema name you want, press Apply button twice. ![Image text](https://github.com/Eddie123XXXX/CS348-Project/blob/new-main-Branch/img-folder/WechatIMG643.jpeg) On the left bar, SCHEMAS double click the schema you just created to make it bold. <img width="150" height="100" src="https://github.com/Eddie123XXXX/CS348-Project/blob/new-main-Branch/img-folder/WechatIMG645.jpeg"/>

3. At create.sql on the top click the lighting button. ![Image text](https://github.com/Eddie123XXXX/CS348-Project/blob/new-main-Branch/img-folder/WechatIMG647.jpeg) The schema for our wep-app is correctly created, to drop it open "drop.sql" under folder sql queries and press lighting button. 

Load data in to the schema:

Select the corresponding table on the left bar(Cloths for example): right click and click "table data import wizard". <img width="150" height="150" src="https://github.com/Eddie123XXXX/CS348-Project/blob/new-main-Branch/img-folder/WechatIMG651.jpeg"/>
Choose the corrsponding csv file under forlder generate data(here we will use clothes.csv). Click next, at row "use existing table:" make sure the table name is correspond with .csv uploaded, then click next 3 times once you click the finish, the dataset will load into the mysql database successfully.


## Web-application
The web application is built based on the react framework and MySql, which will run at local machine.

<br/>
    To get started, make sure you have download following: Node.js, Mysql. 
    The detailed instruction is given below:


`Node.js :` [download link](https://nodejs.org/en/)`, follow the instruction on the website will successfully install it.`

`Mysql:` [download link](https://dev.mysql.com/downloads/mysql/)`, follow the instruction on the website will successfully install it. Since the web app now is only hello world typed, make sure you have the database IDE which support Mysql (MySQLWorkbench is highly recommended).`

<br/>
As you can see in the folder `front end` consists of all front end code, and `back end` will consists of all sql instructions with back end code.

As for now we can only create database though Mysql, (The instructions below is just an example on MySQLWorkbench).

To create the test database, right click on the `SCHEMAS` area, and select `Create Schema`, name is as anything you want. Under folder `sql queries` run `create.sql` to generate corresponding tables. To input some test database to begin with, please read `README.md` file under folder `Generate Data`.

Now, open a terminal under folder `front end` and type following:

    npm install 
    npm install mysql
    npm install express
    npm install cors
    npm add axios
    npm init
For init procedure, simply press enter multiplie times and type yes at the end


Open a terminal under folder `back end` and type following:

    npm install 

Open file at `back end` folder, open index.js on any Code IDE at line 13 with code

    user: "root",
    host: "localhost",
    password: "password",
    database: "1toinf"
Please change it to your own mysql connection


Then, we can now run the application on the web browser (Google Chrome is recommended). 

<br/>
The following is the only command code you need to reopen the web app.

Under folder `front end`, type following at terminal:

    npm start

Under folder `back end`, type following at terminal:

    node index.js

Open your web browser and goto `http://localhost:3000` if the page did not show up automatically.


We can now enter information on the website and it will stored into Mysql server.

To quit, just type `Control + C` at terminal under two different folder `front end` and `back end`

## Currently support features   
    Display All cloths information at home page
    Register User and Seller Account
    User and Seller login
    Search by cloth brand
    Change cloth price
    Delete cloth
    Add new cloth

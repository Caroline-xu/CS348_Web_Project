# CS348-Project 

Welcome to the CS348 project, the web application is built based on the react framework and MySql, which will run at local machine.

<br/>
    To get started, make sure you have download following: node.js, Mysql. 
    The detailed instruction is given below:


`Node.js :` [download link](https://nodejs.org/en/)`, follow the instruction on the website will successfully install it.`

`Mysql:` [download link](https://dev.mysql.com/downloads/mysql/)`, follow the instruction on the website will successfully install it. Since the web app now is only hello world typed, make sure you have the database IDE which support Mysql (MySQLWorkbench is highly recommended).`

<br/>
As you can see in the folder `1toinfty` there is two subfolder, `client` consists of all front end code, and `server` will consists of all sql instructions, for now, it is just some functions that help us successfully link into the Mysql Database.

The test database for now is just a single table consists of `id`, `Brand`, `Price`, `Kind` and `Gender`. As for now we can only create database though Mysql, (The instructions below is just an example on MySQLWorkbench).

To create the test database, right click on the `SCHEMAS` area, and select `Create Schema`, name is as `cloth_system`. After applying it, right click on `Tables`, and select `Create Table`, the first column name will be `id` with Datatype `INT`, and checked PK, NN and AI. The rest columns are `Brand`, `Price`, `Kind`, `Gender` with all Datatype `TEXT`, and checked NN.

Now, open a terminal under folder `client` and type following:

    npm install mysql
    npm install express
    npm install cors
    npm add axios
    upm init

Then, we can now run the application on the web browser (Google Chrome is recommended). 

<br/>
The following is the only command code you need to reopen the web app.

Under folder `client`, type following at terminal:

    npm start

Under folder `server`, type following at terminal:

    node index.js

Open your web browser and goto `http://localhost:3000` if the page did not show up automatically.


We can now enter information on the website and it will stored into Mysql server.

To quit, just type `Control + C` at terminal under two different folder `client` and `server`


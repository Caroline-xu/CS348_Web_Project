const express = require("express");

const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "1toinf"
});

app.listen(3001, () => {
  db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");
  });
});


var fileUpload = require('express-fileupload');
var fs = require('fs');
const { response } = require("express");
app.use(fileUpload());
app.use('/Photos',express.static(__dirname+'/Photos'));

// all for cloths table, and sub table cate size 
// get all cloths
// add and delete cloth 
// update price and size
// sales not done


// find all cloths in DB
app.get("/cloths", (req, res) => {
  var q = "SELECT cid,Brand,Price FROM Cloths";
  var q1 = "SELECT MAX(cid) a FROM Cloths;";
  db.query(q, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results[0].a);
      res.json(results);
    }
  });
});


// find all cate
app.get("/cloths/cate", (req, res) => {
  const Brand = req.body.brand;
  var q = "select * from Cloths where brand like \"%";
  q = q + Brand;
  q = q + "%\" ";


  db.query(q, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results[0].a);
      res.json(results);
      console.log(q);
    }
  });
});


// add new cloth by sellers
app.post("/seller/post", (req, res) => {
  const Brand = req.body.brand;
  const Price = req.body.price;

  var input = [Brand, Price];
  var q1 =
    "INSERT INTO Cloths (brand, in_stock, price, sales) VALUES (?,0,?,0);";

  db.query(q1, input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Cloth Added");
    }
  });
}); 



// generate corresponding size row
app.post("/seller/:id/post/size", (req, res) => {

  var q2 =
    "INSERT INTO Sizes VALUES ((SELECT MAX(cid) a FROM Cloths),0,0,0,0,0,0,0);";
  db.query(q2, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Cloth Added with Size table now");
    }
  });
});

// generate corresponding cate row
app.post("/seller/:id/post/cate", (req, res) => {

 
  const Gender= req.body.gender;
  const Type = req.body.type;


  var input = [Gender,Type];
  var q1 =
    "INSERT INTO Categories VALUES ((SELECT MAX(cid) a FROM Cloths),?,?);";

  db.query(q1, input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Cloth Added with Cate now");
    }
  });
});

// update cloths by sellers
app.put('/seller/posted/:cid',(req, res)=> {

  const Price = req.body.price;
  const Cid = parseInt(req.params.cid);
  var input = [Price,Cid];
  var q = "UPDATE Cloths set price=? WHERE cid=?;";

  db.query(q,input,function (err, results,fields) {
    if (err) {
      response.send('Failed');
    } else {
      res.json("cloth updated");
    }
  })
});

// update size corresponding size row
app.put('/seller/:sid/posted/:cid/size',(req, res)=> {

  const XS = req.body.XS;
  const S = req.body.S;
  const M = req.body.M;
  const L = req.body.L;
  const XL = req.body.XL;
  const XXL = req.body.XXL;
  const Total = XS + S + M + L + XL + XXL;
  const Cid = parseInt(req.params.cid);
  var input = [XS,S,M,L,XL,XXL,Total,Cid];
  var q = "UPDATE Sizes set XS=?,S=?,M=?,L=?,XL=?,XXL=?,Total=? WHERE cid=?;";

  db.query(q,input,function (err, results,fields) {
    if (err) {
      response.send('Failed');
    } else {
      res.json("cloth size updated");
    }
  })
});

// update in_stock stat
app.put('/seller/:sid/posted/:cid/in_stock',(req, res)=> {

  
  var q = "UPDATE Cloths SET in_stock = CASE WHEN (SELECT Total FROM Sizes WHERE cid = ?) <> 0 then TRUE WHEN (SELECT Total FROM Sizes WHERE cid = ?) = 0 then FALSE END WHERE cid = ?;";
  const Cid = parseInt(req.params.cid);
  var input = [Cid,Cid,Cid];
  db.query(q,input,function (err, results,fields) {
    if (err) {
      response.send('Failed');
    } else {
      res.json("in stock stat updated");
    }
  })
});


// delete cloths by sellers
app.delete('/seller/posted/:cid',(req, res)=> {

  const Cid = parseInt(req.params.cid);
  var input = [Cid];
  var q = "DELETE from Cloths WHERE cid=?;";

  db.query(q,input,function (err, results,fields) {
    if (err) {
      response.send('Failed');
    } else {
      res.json("cloth deleted");
    }
  })
});

// delete corresponding size row
app.delete('/seller/:sid/posted/:cid/size',(req, res)=> {

  const Cid = parseInt(req.params.cid);
  var input = [Cid];
  var q = "DELETE from Sizes WHERE cid=?;";

  db.query(q,input,function (err, results,fields) {
    if (err) {
      response.send('Failed');
    } else {
      res.json("cloth deleted with size");
    }
  })
});


// delete corresponding cate row
app.delete('/seller/:sid/posted/:cid/cate',(req, res)=> {

  const Cid = parseInt(req.params.cid);
  var input = [Cid];
  var q = "DELETE from Categories WHERE cid=?;";

  db.query(q,input,function (err, results,fields) {
    if (err) {
      response.send('Failed');
    } else {
      res.json("cloth deleted with cate");
    }
  })
});

//////////////////////////////////////////////////



//all for user table

// find all users
app.get("/users", (req, res) => {
  var q = "SELECT * FROM Users";
  // var q1 = "SELECT MAX(cid) a FROM Cloths;";
  db.query(q, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results[0].a);
      res.json(results);
    }
  });
});

// get user id by password
app.post("/users/login", (req, res) => {
  const Email = req.body.email;
  const Password = req.body.password;
  var input = [Email,Password];
  var q = "SELECT uid FROM Users WHERE email =? and password=?";
  // var q1 = "SELECT MAX(cid) a FROM Cloths;";
  db.query(q, input,function (err, results, fields) {
    if (err) {
      res.send({err: err})
    } else {
      // console.log(results[0].a);
      if (results.length > 0) {
        res.send(results);
      } else {
        res.send({message: "Wrong username/password combination!"})
      }
    }
  });
});

// add new user
app.post("/user/register", (req, res) => {

  const First = req.body.first_name;
  const Last = req.body.last_name;
  const Birth = req.body.birth;
  const Password = req.body.password;
  const Phone = req.body.phone;
  const Email = req.body.email;

  var input = [First,Last,Birth,Password,Phone,Email];
  var q1 =
    "INSERT INTO Users (first_name, last_name, birth, password, phone, email) VALUES (?,?,?,?,?,?);";

  db.query(q1, input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("User Added");
    }
  });
}); 


// show user payment
app.get("/user/:id/payment", (req, res) => {
  const Uid = parseInt(req.params.id);
  var input = [Uid];
  var q = "SELECT * FROM Payments WHERE uid =?";
  db.query(q,input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results[0].a);
      res.json(results);
    }
  });
});

// add user payment
app.post("/user/:id/payment", (req, res) => {

  const Uid = parseInt(req.params.id);
  const Card = req.body.card_number;
  const Exp = req.body.expiry_date;
  const CardH = req.body.cardholder;
  const CVC = req.body.CVC;


  var input = [Uid,Card,Exp,CardH,CVC];
  var q1 =
    "INSERT INTO Payments VALUES (?,?,?,?,?);";

  db.query(q1, input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Payment Added");
    }
  });
}); 

// show user address
app.get("/user/:id/address", (req, res) => {
  const Uid = parseInt(req.params.id);
  var input = [Uid];
  var q = "SELECT * User_Address WHERE uid =?";
  db.query(q,input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      // console.log(results[0].a);
      res.json(results);
    }
  });
});

// add user address
app.post("/user/:id/address", (req, res) => {

  const Uid = parseInt(req.params.id);
  const Address = req.body.address;


  var input = [Uid,Address];
  var q1 =
    "INSERT INTO User_Address VALUES (?,?);";

  db.query(q1, input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Address Added");
    }
  });
}); 

// add cloth photo
app.post('/photos',(request,response)=>{

  fs.writeFile("./Photos/"+request.files.file.name,
  request.files.file.data,function(err){
      if(err){
          return
          console.log(err);
      }

      response.json(request.files.file.name);
  })

});


// all for seller

// add new seller

// add new user
app.post("/seller/register", (req, res) => {

  const Name = req.body.name;
  const Address = req.body.address;
  const Password = req.body.password;

  var input = [Name,Address,Password];
  var q1 =
    "INSERT INTO Sellers (name, address, password) VALUES (?,?,?);";

  db.query(q1, input, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Seller Added");
    }
  });
}); 

// get seller id by password
app.post("/sellers/login", (req, res) => {
  const Name = req.body.name;
  const Password = req.body.password;
  var input = [Name,Password];
  var q = "SELECT sid FROM Sellers WHERE name =? and password=?";
  // var q1 = "SELECT MAX(cid) a FROM Cloths;";
  db.query(q, input,function (err, results, fields) {
    if (err) {
      res.send({err: err})
    } else {
      // console.log(results[0].a);
      if (results.length > 0) {
        res.send(results);
      } else {
        res.send({message: "Wrong username/password combination!"})
      }
    }
  });
});



// add feedback
app.post("/feedback", (req, res) => {

  const Fb = req.body.fb;


  
  var q1 =
    "INSERT INTO Feedback (fb) VALUES (?);";

  db.query(q1, Fb, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.json("Feedback Added");
    }
  });
}); 
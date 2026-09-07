const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Saurav@56",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// // INSERTING new Data.........................-----------------------...................

//  //let q = "SHOW TABLES";
// let q = "INSERT INTO user(id , username , email , password) VALUES ?";
// //   let users = [
// //     ["123b","123_newuserb","abc@gmai;.comb","abcd"],
// //     ["123c","123_newuserc","abc@gmai;.comc","abcc"]
// //   ];

// let data = [];
// for(let i = 1 ; i<=100 ; i++){
//     data.push(getRandomUser());
// }


// HOME ROUTE
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
  
});



//SHOW ROUTE
app.get("/user",(req,res)=>{
    let q = `SELECT * FROM user`;
    
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
    //   let count = result[0]["count(*)"];
       res.render("showusers.ejs",{users});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// Edit Route
app.get("/user/:id/edit",(req,res)=>{
  let{id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
       res.render("edit.ejs",{user});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});
// UPDATE (DB) Route
app.patch("/user/:id",(req ,res)=>{
  let{id} = req.params;
  let {password : formPass , username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass!= user.password){
        res.send("kaya daal raha hai bhai,mtlb kuch bhi ");
      }else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2,(err,result) =>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
       
    });
  } catch (err) {
    console.log(err);
   return res.send("some error in DB");
  }
});


// ADD USER FORM
app.get("/user/new", (req, res) => {
  res.render("newuser.ejs");
});


// ADD NEW USER
app.post("/user", (req, res) => {
  let { username, email, password } = req.body;

  let id = faker.string.uuid();

  let q = `
    INSERT INTO user (id, username, email, password)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(
    q,
    [id, username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);

        if (err.code === "ER_DUP_ENTRY") {
          return res.send("Username already exists. Please choose another username.");
        }

        return res.send("Some error in DB");
      }

      console.log("User added successfully");

      res.redirect("/user");
    }
  );
});


// DELETE USER
app.delete("/user/:id", (req, res) => {

    let { id } = req.params;
    let { email, password } = req.body;

    let q = `SELECT * FROM user WHERE id = ?`;

    connection.query(q, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];

        if (email !== user.email || password !== user.password) {
            return res.send("Wrong email or password");
        }

        let q2 = `DELETE FROM user WHERE id = ?`;

        connection.query(q2, [id], (err, result) => {

            if (err) {
                console.log(err);
                return res.send("Some error in DB");
            }

            res.redirect("/user");
        });
    });
});
// DELETE USER FORM
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM user WHERE id = ?`;

    connection.query(q, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];

        res.render("destroyuser.ejs", { user });
    });
});
app.listen("8080", () => {
  console.log("server is listening to port 8080");
});



// connection.end();

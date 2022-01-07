const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const db = require("./db");
const { response } = require("express");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

//npm i -g win-node-env --save

// if (!process.env.NODE_ENV === "development") {
  /*app.use(express.static(path.join(__dirname, "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });*/
// }

/*app.use(express.static(path.join(__dirname, '../web-backend/build')));

app.get('/*', (req,res) => {
   res.sendFile(path.join(__dirname, '../web-backend/build/index.html'));  
});*/

//app.use(cors()); //ไม่ใช้

app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin',"https://www.accnew.com");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Api-Key");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();

  /*res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  return next()*/
});

app.use("/controller/counter", require("./controller/counter"));
app.use("/controller/user", require("./controller/user"));

/*if(process.env.NODE_ENV == "production")
{
	app.use(express.static(path.join(__dirname, '../web-accounting/build')));	
}*/

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});

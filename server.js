var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require('path');
var link_ = require(__dirname + "/test2_moduleA.js");

app.use(express.static('public'));
const exphbs = require("express-handlebars");
const { error } = require("console");
app.engine(".hbs", exphbs.engine({
  extname: ".hbs",
  
  defaultLayout: "main"}));
app.set("view engine", ".hbs");
onHttpStart = () => {
  console.log('Express http server listening on port ' + HTTP_PORT);
  
}

//home
app.get("/", (req, res) => {
    
   
    res.render("home")

});

app.get("/getBSD", (req, res) => {    
  link_.getBSD().then((data) => {
    res.render("Students",{"Students": data});
  }).catch((error) => {
res.render({messages:"no results"})
  })
});
app.get("/getAllStudents",(req,res)=>{
  link_.getAllStudents().then((data)=>{
    res.render("Students",{"Students": data});
  }).catch((error) => {
res.render({messages:"no results"})
  })
})

app.get("/highGPA", (req, res) => {
  link_.highGPA().then((data) => {
    res.render("Students",{"Students": data});
  }).catch((error) => {
res.render({messages:"no results"})
  })
});
app.use((req, res) => {
    res.status(404).end('404 PAGE NOT FOUND');
});

link_.init().then(() => {
  app.listen(HTTP_PORT, onHttpStart());
}).catch (() => {
  console.log('test Not Complete');
});


// here, we import the express package and put its contents
// into the variable "express"
let express = require("express");

// here, we're formally creating the app
let app = express();

// here, we define what happens if someone tries to access our server with
// the path "/".  the first parameter is the path, the second parameter
// is a function with the parameters req (short for request) and res
// (short for response)
app.get("/", (req, res) => {
  // if someone tries to access us, we want to send them the text "Hello World!"
  res.send("Welcome to Mike's Library");
});


app.get("/ageofinnocence", (req, res) => {
  res.sendfile("ageofinnocence.txt");
});

app.get("/annakarenina", (req, res) => {
  res.sendfile("./annakarenina.txt");
});

// if you have any HTML files, you can send those over too
app.get("/candide", (req, res) => {
  res.sendfile("./candide.txt");
});

// if you have any HTML files, you can send those over too
app.get("/janeeyre", (req, res) => {
    res.sendfile("./janeeyre.txt");
});


app.get("/karamazov", (req, res) => {
    res.sendfile("./karamazov.txt");
});


app.get("/northangerabbey", (req, res) => {
    res.sendfile("./northangerabbey.txt");
});

// if they try to access another page, send them a 404 error
app.use((req, res) => {
  res.status(404).sendfile("./404.html");
});

// now that we've defined what should happen when people try to access different
// parts of the server, this code actually gets the server up and running on our
// machine
app.listen(3000, () => {
  console.log("Server started on port 3000.");
});

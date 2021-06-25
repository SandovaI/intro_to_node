// var http = require("http");

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
const express = require("express");
const app = express();
const port = 3000;
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});
app.post("/home", function (req, res) {
  res.send("post worked");
});
app.get("/code", (req, res) => {
  res.sendStatus(401);
});
app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});

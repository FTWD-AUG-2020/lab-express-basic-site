const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  res.sendfile(__dirname + "/views/home.html");
});
app.get("/about", (req, res, next) => {
  res.sendfile(__dirname + "/views/about.html");
});
app.get("/works", (req, res, next) => {
  res.sendfile(__dirname + "/views/works.html");
});

app.listen(3000, () => console.log("Test test, this is homebase on 3000"));

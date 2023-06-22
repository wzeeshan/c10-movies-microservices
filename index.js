import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("hello lloyds");
});

app.get("/movies", function (req, res) {
  res.send("request made to movies endpoint");
});

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});

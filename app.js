const express = require("express");
const { join } = require("path");
const path = require("path");
const taskRouter = require("./routes/task");
var bodyParser = require("body-parser");

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");
// app.set("views", "views");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

// root index handler just sent to api

app.use(taskRouter);

app.use("/", (req, res, next) => {
  console.log("root directory");
  res.redirect("/api/v1/task/");
});
// 404 erro router

app.use((req, res) => {
  res.statusCode = 404;
  res.send("error 404 not found");
});

app.listen(3000, () => console.log("express server runing on port 3000"));

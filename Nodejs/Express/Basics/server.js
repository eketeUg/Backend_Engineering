const http = require("http");
const express = require("express");

const app = express();

// middleware
app.use((req, res, next) => {
  console.log("first middleware");
  next(); // allows the request to continue to the next middleware in line
});
app.use((req, res, next) => {
  console.log("second middleware");
  // sending a response
  res.send(`<h1>Express</h1>`);
});

// creating a server instant

app.listen(5000, () => {
  console.log(" app is running on port 5000");
});

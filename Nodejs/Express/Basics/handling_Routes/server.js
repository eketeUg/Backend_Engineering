const http = require("http");
const express = require("express");

const app = express();

// middleware
app.use("/express", (req, res, next) => {
  console.log("express route");
  res.send(`<h1>Express Route</h1>`);
});
app.use("/node", (req, res, next) => {
  console.log("second middleware");
  // sending a response
  res.send({ num: 20 });
});

app.use("/test", (req, res, next) => {
  console.log("second middleware");
  // sending a response
  res.send({ num: 20 });
});

// creating a server instant

app.listen(5000, () => {
  console.log(" app is running on port 5000");
});

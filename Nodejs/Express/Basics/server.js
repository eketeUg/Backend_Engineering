const http = require("http");
const express = require("express");

// middleware
app.use((req, res, next) => {
  console.log("first middleware");
});

const app = express();

app.listen(5000);

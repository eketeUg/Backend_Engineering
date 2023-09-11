// routes for admin
const path = require("path");
const express = require("express");

const router = express.Router();

// route middleware to handle
router.get("/", (req, res, next) => {
  //res.send("<h1>Hello from my shop</h1>");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html")); // serving html page
});

module.exports = router;

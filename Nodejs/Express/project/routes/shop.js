// routes for admin
const path = require("path");
const express = require("express");
const rootDir = require("../util/path"); // helper function for rootdirectory

const router = express.Router();

// route middleware to handle
router.get("/", (req, res, next) => {
  //res.send("<h1>Hello from my shop</h1>");
  res.sendFile(path.join(rootDir, "views", "shop.html")); // serving html page
});

module.exports = router;

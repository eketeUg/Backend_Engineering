// routes for admin
const express = require("express");

const router = express.Router();

// route middleware to handle
router.get("/", (req, res, next) => {
  res.send("<h1>Hello from my shop</h1>");
});

module.exports = router;

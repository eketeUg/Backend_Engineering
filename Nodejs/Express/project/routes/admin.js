// routes for admin
const path = require("path");
const express = require("express");
const rootDir = require("../util/path"); // helper function for rootdirectory

const router = express.Router();

const products = []; // array to store products

// route middleware to render add product page
//note app.use() method works with all http method verbs
router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     ` <form action="/add-product" method="POST">
  //       <input type="text" name="title" />
  //       <button type="submit">submit</button>
  //     </form>`
  //   );

  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// route middleware to product creation
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push(req.body.title);
  console.log("admin", products);
  res.redirect("/"); // to redirect to another route
});

exports.router = router;
exports.products = products;

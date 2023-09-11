// routes for admin
const path = require("path");
const express = require("express");

const router = express.Router();

// route middleware to render add product page
//note app.use() method works with all http method verbs
router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     ` <form action="/add-product" method="POST">
  //       <input type="text" name="title" />
  //       <button type="submit">submit</button>
  //     </form>`
  //   );

  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// route middleware to product creation
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // to redirect to another route
});

module.exports = router;

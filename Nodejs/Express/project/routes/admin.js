// routes for admin
const express = require("express");

const router = express.Router();

// route middleware to render add product page
//note app.use() method works with all http method verbs
router.use("/add-product", (req, res, next) => {
  res.send(
    ` <form action="/product" method="POST">
      <input type="text" name="title" />
      <button type="submit">submit</button>
    </form>`
  );
});

// route middleware to product creation
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // to redirect to another route
});

module.exports = router;

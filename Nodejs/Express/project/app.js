const express = require("express");
// instantiating the express app
const app = express();

// route middleware to render add product page
//note app.use() method works with all http method verbs
app.use("/add-product", (req, res, next) => {
  res.send(
    ` <form action="/product" method="POST">
      <input type="text" name="title" />
      <button type="submit">submit</button>
    </form>`
  );
});

// route middleware to product creation
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // to redirect to another route
});

// route middleware to handle
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from my shop</h1>");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

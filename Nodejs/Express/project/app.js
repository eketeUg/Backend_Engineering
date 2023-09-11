const express = require("express");
const bodyParser = require("body-parser"); // to parse request bodies
// instantiating the express app
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// request body parse middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes); // instantiating the admin route
app.use(shopRoutes); // instantiating the shop route

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

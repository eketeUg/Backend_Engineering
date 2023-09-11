const path = require("path");
const express = require("express");
const rootDir = require("./util/path"); // helper function for rootdirectory
const bodyParser = require("body-parser"); // to parse request bodies
// instantiating the express app
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// request body parse middleware
app.use(bodyParser.urlencoded({ extended: false }));
// static file middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); // instantiating the admin route
app.use(shopRoutes); // instantiating the shop route

// adding 404 error middleware to handle any request to a wrong route
app.use((req, res, next) => {
  //   res.status(404).send(`<h1>Page note found</h1>`);
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

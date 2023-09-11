const express = require("express");
// instantiating the express app
const app = express();

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

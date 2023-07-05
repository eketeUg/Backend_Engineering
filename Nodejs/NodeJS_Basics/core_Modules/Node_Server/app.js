const http = require("http");

// function reqListerner(req, res) {}
// // creating a server
// http.createServer(reqListerner);
// or

http
  .createServer((req, res) => {
    console.log(req);
  })
  .listen(3000);

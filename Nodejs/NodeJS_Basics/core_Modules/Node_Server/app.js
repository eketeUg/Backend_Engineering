// global module - http
const http = require("http");

// function reqListerner(req, res) {}
// // creating a server
// http.createServer(reqListerner);
// or

// http
//   .createServer((req, res) => {
//     console.log(req);
//     // process.exit();
//   })
//   .listen(3000);

// to access some request fields like url, method and headers

http
  .createServer((req, res) => {
    console.log(req.url, req.method);
    // process.exit();
  })
  .listen(3000);

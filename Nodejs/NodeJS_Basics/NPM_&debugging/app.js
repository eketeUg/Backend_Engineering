const http = require("http");

const serve = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);

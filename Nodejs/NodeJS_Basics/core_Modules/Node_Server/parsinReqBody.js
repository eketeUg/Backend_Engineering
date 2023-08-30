const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/") {
    res.write(`<html><body>
        <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>
        </html>`);
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // create a new file and save users message
    fs.writeFileSync("meesage.txt", "Dummy text");
    //res.statusCode = 302;
    //res.setHeader("Location", "/");
    res.writeHead(302, { Location: "/" });
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html><body>
        <h1>Hello !!!</h1></body>
        </html>`);
  res.end();
});

server.listen(3000);

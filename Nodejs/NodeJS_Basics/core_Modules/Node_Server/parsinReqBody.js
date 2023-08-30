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
    const body = [];
    // register event listerner-- a data event
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // register another event listener to be fired when the on event listerner is done with parsing the data
    req.on("end", () => {
      // using the Buffer method to join all the body message and turn them into a string.
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    // create a new file and save users message
    fs.writeFileSync("meesage.txt", "Dummy text");
    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html><body>
        <h1>Hello !!!</h1></body>
        </html>`);
  res.end();
});

server.listen(3000);

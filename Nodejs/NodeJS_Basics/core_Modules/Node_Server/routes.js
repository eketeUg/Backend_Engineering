// using the node module system (routes.js to handle routings)

const fs = require("fs");

if (url == "/") {
  res.write(`<html><body>
        <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>
        </html>`);
  return res.end();
}
if (url === "/message" && method === "POST") {
  const body = [];
  // register event listerner to listen to a data event
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });

  // register another event listener to be fired when the on event listerner is done with parsing the data
  return req.on("end", () => {
    // using the Buffer method to join all the body message and turn them into a string.
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const message = parsedBody.split("=")[1];
    // create a new file and save users message
    fs.writeFileSync("message.txt", message);
    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  });
}
res.setHeader("Content-Type", "text/html");
res.write(`<html><body>
        <h1>Hello !!!</h1></body>
        </html>`);
res.end();

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<h1>Hello!!</h1>");
    res.write(`<html><body>
        <form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>
        </html>`);
    return res.end();
  }

  if (url === "/user") {
    res.write(
      ` <html>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
      </ul>
      </html>`
    );
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const reqBody = [];

    // create an event listerner tp listern to data events

    req.on("data", (chunks) => {
      reqBody.push(chunks);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(reqBody).toString();

      const username = parsedData.split("=")[1];
      console.log(username);
    });
    res.writeHead("302", { Location: "/" });
    return res.end();
  }
};

module.exports = routeHandler;

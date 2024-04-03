import http from "http";

const httpserver = http.createServer();
httpserver.on("request", (req, res) => res.end("Ok AM UP AND RUNNING"));
httpserver.on("listening", () => {
  console.log(
    `Server 4 Listening on port http://localhost:${
      httpserver.address().port
    }/ on ${httpserver.address().address} family ${httpserver.address().family}`
  );
});

httpserver.on("error", () => {
  console.error(error);
});

// :: ipv6 => 0.0.0.0 ipv4
//unspecified address
httpserver.listen(0, "127.0.0.1");

const httpserver6 = http.createServer();
httpserver6.on("request", (req, res) => res.end("Ok AM UP AND RUNNING"));
httpserver6.on("listening", () => {
  console.log(
    `Sever 6 Listening on port http://localhost:${
      httpserver6.address().port
    }/ on ${httpserver6.address().address} family ${
      httpserver6.address().family
    }`
  );
});

httpserver6.on("error", () => {
  console.error(error);
});
// :: ipv6 => 0.0.0.0 ipv4
//unspecified address
httpserver6.listen(0, "::1");

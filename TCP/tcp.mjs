import { Socket } from "dgram";
import net from "net";

const server = net.createServer((socket) => {
  console.log(
    "TCP handshake Success with " +
      socket.remoteAddress +
      ":" +
      socket.remotePort
  );
  socket.write("Hello Client!");
  socket.on("data", (data) => {
    console.log("Received data " + data.toString());
  });
});

server.listen(3000, "127.0.0.1");

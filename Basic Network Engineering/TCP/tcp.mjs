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
console.log(server.address);
server.listen(3000, "127.0.0.1");

// open a terminal and run nc 127.0.0.1 3000 to establish a TCP connection
// note you can execute multiple tcp connection with the same server

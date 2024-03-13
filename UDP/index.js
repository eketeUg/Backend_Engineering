import dgram from "dgram";

// creating a socket
const socket = dgram.createSocket("udp4");

socket.bind(3000, "127.8.0.1");
socket.on("message", (msg, info) => {
  console.log(
    `My servver got a datagram ${msg}, from ${info.address}:${info.port}`
  );
});

// 参考: https://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www
const io = require("socket.io")({
  cors: {
    origins: ["http://localhost:8080"],
    credentials: true,
    methods: ["GET", "POST"],
  },
});
const socketapi = {
  io: io,
};

io.on("connection", function (socket) {
  console.log("A user connected");
});

module.exports = socketapi;

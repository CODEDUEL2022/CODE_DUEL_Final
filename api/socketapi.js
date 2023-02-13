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

const waitingPlayersIds = [];

io.on("connection", function (socket) {
  console.log("connected to socket.io !!!");

  socket.on("enterWaitingRoom", (user_id) => {
    waitingPlayersIds.push(user_id);
    console.log(`${waitingPlayersIds.length} people is waiting...`);

    const pushPlayersToRoom = (player1_id, player2_id) => {
      const game_id = Math.random().toString(32).substring(2);
      io.emit("pushPlayPage", game_id, player1_id, player2_id);
    };

    if (waitingPlayersIds.length >= 2) {
      waitingPlayersIds.splice(0, 2);
      setTimeout(() => {
        pushPlayersToRoom(waitingPlayersIds[0], waitingPlayersIds[1]);
      }, 1000);
    }
  });
});

module.exports = socketapi;

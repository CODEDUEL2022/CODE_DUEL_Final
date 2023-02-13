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

const waitingUsersIds = [];

io.on("connection", function (socket) {
  console.log("connected to socket.io !!!");

  socket.on("enterWaitingRoom", (user_id) => {
    waitingUsersIds.push(user_id);
    console.log(`${waitingUsersIds.length} people is waiting...`);

    const pushUsersToRoom = (user1_id, user2_id) => {
      const game_id = Math.random().toString(32).substring(2);
      io.emit("pushPlayPage", game_id, user1_id, user2_id);
    };

    if (waitingUsersIds.length >= 2) {
      waitingUsersIds.splice(0, 2);
      setTimeout(() => {
        pushUsersToRoom(waitingUsersIds[0], waitingUsersIds[1]);
      }, 1000);
    }
  });

  socket.on("quitWaitingRoom", (user_id) => {
    const userIndex = waitingUsersIds.indexOf(user_id);
    waitingUsersIds.splice(userIndex, 1);
    console.log(`${waitingUsersIds.length} people is waiting...`);
  });
});

module.exports = socketapi;

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
const rooms = [];

const deleteWaitingUser = (user_id) => {
  const userIndex = waitingUsersIds.indexOf(user_id);
  waitingUsersIds.splice(userIndex, 1);
  console.log(`${waitingUsersIds.length} people are waiting...`);
};

io.on("connection", function (socket) {
  console.log("connected to socket.io !!!");

  socket.on("enterWaitingRoom", (user_id) => {
    if (waitingUsersIds.includes(user_id)) return;
    waitingUsersIds.push(user_id);
    console.log(`${waitingUsersIds.length} people are waiting...`);

    if (waitingUsersIds.length >= 2) {
      const game_id = Math.random().toString(32).substring(2);
      const user1_id = waitingUsersIds[0];
      const user2_id = waitingUsersIds[1];

      const room = {
        id: game_id,
        users: [user1_id, user2_id],
      };

      socket.join(game_id);
      rooms.push(room);
      console.log(rooms);
      io.emit("readyRandomMatch", game_id, user1_id, user2_id);

      deleteWaitingUser(user1_id);
      deleteWaitingUser(user2_id);
    }
  });

  socket.on("exitWaitingRoom", (user_id) => deleteWaitingUser(user_id));

  socket.on("pushPlayPage", (game_id) => {
    rooms[game_id] = rooms[game_id] === undefined ? 1 : rooms[game_id] + 1;

    console.log(rooms);
    if (rooms[game_id] > 2) return console.log("This room is full.");
    socket.join(game_id);
    console.log(`room:${game_id} に入室しました。現在の人数: ${rooms[game_id]}`);
  });
});

module.exports = socketapi;

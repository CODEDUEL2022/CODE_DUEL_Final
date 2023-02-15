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

      io.emit("successRandomMatching", game_id, user1_id, user2_id);

      deleteWaitingUser(user1_id);
      deleteWaitingUser(user2_id);
    }
  });

  socket.on("exitWaitingRoom", (user_id) => deleteWaitingUser(user_id));

  socket.on("readyGameStart", (game_id, user_id) => {
    const foundRoom = rooms.find((room) => room.id === game_id);

    if (!foundRoom) {
      const newRoom = { id: game_id, users: [user_id] };
      socket.join(game_id);
      rooms.push(newRoom);
      console.log(newRoom);
    } else if (foundRoom.users.length >= 2) {
      return console.log(`This room (${game_id}) is already full`);
    } else {
      // 2人集まったらスタート
      socket.join(game_id);
      foundRoom.users.push(user_id);
      console.log(foundRoom);
      io.to(game_id).emit("gameStart", ...foundRoom.users);
    }
  });

  socket.on("sendCards", (cardsData, playersData, user_id, game_id) => {
    console.log(cardsData);
    console.dir(playersData);
    console.log(user_id);
    // HPの計算はバックで行うようにする
    io.to(game_id).emit("updateField", cardsData);
  });
});

module.exports = socketapi;

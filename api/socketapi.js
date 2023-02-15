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

const waitingUsers = [];
const rooms = {};

const deleteWaitingUser = (user_id) => {
  const userIndex = waitingUsers.findIndex((user) => user.id === user_id);
  waitingUsers.splice(userIndex, 1);
  console.log(`${waitingUsers.length} people are waiting...`);
};

io.on("connection", function (socket) {
  console.log("connected to socket.io !!!");

  socket.on("enterWaitingRoom", (user_id, user_name) => {
    if (waitingUsers.find((user) => user.id === user_id) !== undefined)
      return console.log("もういるよ");

    const newUser = { id: user_id, name: user_name, hp: 200, turn: false };
    waitingUsers.push(newUser);
    console.log(`${waitingUsers.length} people are waiting...`);

    if (waitingUsers.length >= 2) {
      const game_id = Math.random().toString(32).substring(2);
      const user1 = waitingUsers[0];
      const user2 = waitingUsers[1];

      io.emit("successRandomMatching", game_id, user1.id, user2.id);

      deleteWaitingUser(user1.id);
      deleteWaitingUser(user2.id);
    }
  });

  socket.on("exitWaitingRoom", (user_id) => deleteWaitingUser(user_id));

  socket.on("readyGameStart", (game_id, user) => {
    const key = Object.keys(rooms).find((room_id) => room_id === game_id);

    if (!key) {
      const newRoomUsers = [user];
      socket.join(game_id);
      rooms[game_id] = newRoomUsers;
      console.log(rooms);
    } else if (rooms[key].length >= 2) {
      return console.log(`This room (${game_id}) is already full`);
    } else {
      // 2人集まったらスタート
      socket.join(game_id);
      rooms[key].push(user);
      console.log(rooms);
      io.to(game_id).emit("gameStart", ...rooms[key]);
    }
  });

  socket.on("sendCards", (cardsData, playersData, user_id, game_id) => {
    console.log(cardsData);
    console.dir(playersData);
    console.log(user_id);

    // TODO: 発動されたコンボからHPの計算の処理を書く。
    // io.to(game_id).emit("updateField", cardsData, playersData);
  });
});

module.exports = socketapi;

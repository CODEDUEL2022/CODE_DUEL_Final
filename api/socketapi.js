// 参考: https://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www
const io = require("socket.io")({
  cors: {
    // origins: ["http://localhost:8080"],
    origins: true,
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

const calculateMyHp = function (hp /* user.hp */, action_type, action_value) {
  let newHp;
  if (action_type === "attack") {
    newHp = hp;
  } else if (action_type === "recover") {
    newHp = hp + action_value;
  }
  return newHp;
};

const calculateOpponentHp = function (hp /* user.hp */, action_type, action_value) {
  let newHp;
  if (action_type === "attack") {
    newHp = hp - action_value;
  } else if (action_type === "recover") {
    newHp = hp;
  }
  return newHp;
};

io.on("connection", function (socket) {
  console.log("connected to socket.io !!!");

  socket.on("enterWaitingRoom", (user_id, user_name) => {
    console.log(user_name)
    if (waitingUsers.find((user) => user.id === user_id) !== undefined){
      console.log("user情報",user)
      return console.log("もういるよ");
    }
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

  socket.on("readyGameStart", (player) => {
    const key = Object.keys(rooms).find((room_id) => room_id === player.game_id);

    if (!key) {
      const newRoomUsers = [player];
      rooms[player.game_id] = {
        round: 1,
        players: newRoomUsers,
      };
      console.log(rooms);

      socket.join(player.game_id);
    } else if (rooms[key].length >= 2) {
      return console.log(`This room (${player.game_id}) is already full`);
    } else {
      // 2人集まったらスタート
      const newPlayer = { ...player, turn: true };
      rooms[key].players.push(newPlayer);
      console.log(rooms);

      socket.join(player.game_id);
      io.to(player.game_id).emit("gameStart", rooms[key].round, ...rooms[key].players);
    }
  });

  socket.on("sendCards", (combo, cards, playersData, game_id) => {
    console.log("attacked! change turn.");
    rooms[game_id].round += 1;

    // カード一枚出しの場合の処理
    if (combo === null) {
      const sendedCard = cards[0];

      const updatedPlayersData = rooms[game_id].players.map((user) => {
        if (user.id === playersData["myData"].id) {
          return {
            ...user,
            turn: false,
            sp: user.sp - sendedCard.cost,
            hp: calculateMyHp(user.hp, sendedCard.action_type, sendedCard.value),
          };
        }
        if (user.id === playersData["opponentsData"].id)
          return {
            ...user,
            turn: true,
            sp: user.sp + 1,
            hp: calculateOpponentHp(user.hp, sendedCard.action_type, sendedCard.value),
          };
      });
      rooms[game_id].players = updatedPlayersData;
      console.log(rooms);
      return io.to(game_id).emit("updateField", rooms[game_id].round, null, cards, updatedPlayersData);
    }

    // コンボの場合の処理
    const updatedPlayersData = rooms[game_id].players.map((user) => {
      if (user.id === playersData["myData"].id) {
        return {
          ...user,
          turn: false,
          sp: user.sp - combo.cost,
          hp: calculateMyHp(user.hp, combo.action_type, combo.value),
        };
      }
      if (user.id === playersData["opponentsData"].id) {
        return {
          ...user,
          turn: true,
          sp: user.sp + 1,
          hp: calculateOpponentHp(user.hp, combo.action_type, combo.value),
        };
      }
    });

    rooms[game_id].players = updatedPlayersData;
    console.log(rooms);
    io.to(game_id).emit("updateField", rooms[game_id].round, combo, cards, updatedPlayersData);
  });
});

module.exports = socketapi;

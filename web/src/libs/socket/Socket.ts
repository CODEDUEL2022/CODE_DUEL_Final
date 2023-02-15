import { io, Socket } from 'socket.io-client';
import { CardType } from '../types/Card';
import { PlayerType } from '../types/Player';
interface UserType {
  id: Number;
  name: String;
  hp: Number;
  turn: boolean;
}

interface ServerToClientEvents {
  successRandomMatching: (game_id: string, user1_id: number, user2_id: number) => void; //FullRoom
  updateField: (cardsData: Array<CardType>, playersData: { [key: string]: PlayerType }) => void; //HPinfo
  gameStart: (user1: UserType, user: UserType) => void; // gameStart
}

interface ClientToServerEvents {
  enterWaitingRoom: (user_id: number, user_name: String) => void; //AutoMatchingPreLogin
  exitWaitingRoom: (user_id: number, user_name: String) => void; // LeaveWaitingRoom
  readyGameStart: (game_id: string, user: UserType) => void; //login
  joinRoom: (game_id: String, opponent_id: number) => void; // roomJoin
  sendCards: (
    cardsData: Array<CardType>,
    playersData: { [key: string]: PlayerType },
    user_id: number,
    game_id: string
  ) => void; //cardValue
}

class SocketIo {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3000/');
    console.log('Connecting Socket.io...');
  }

  readyGameStart(game_id: string, user: UserType) {
    this.socket?.emit('readyGameStart', game_id, user);
  }

  enterWaitingRoom(user_id: number, user_name: String) {
    console.log(user_id);
    this.socket?.emit('enterWaitingRoom', user_id, user_name);
  }

  exitWaitingRoom(user_id: number, user_name: String) {
    this.socket?.emit('exitWaitingRoom', user_id, user_name);
  }

  successRandomMatching(callback: (game_id: string, user1_id: number, user2_id: number) => void) {
    this.socket?.on(
      'successRandomMatching',
      (game_id: string, user1_id: number, user2_id: number) => {
        return callback(game_id, user1_id, user2_id);
      }
    );
  }

  joinRoom(game_id: String, opponent_id: number) {
    this.socket?.emit('joinRoom', game_id, opponent_id);
  }

  gameStart(callback: (user1: UserType, user: UserType) => void) {
    this.socket?.on('gameStart', (user1: UserType, user2: UserType) => {
      return callback(user1, user2);
    });
  }

  sendCards(
    cardsData: Array<CardType>,
    playersData: { [key: string]: PlayerType },
    user_id: number,
    game_id: string
  ) {
    this.socket?.emit('sendCards', cardsData, playersData, user_id, game_id);
  }

  updateField(
    callback: (cardsData: Array<CardType>, playersData: { [key: string]: PlayerType }) => void
  ) {
    this.socket?.on(
      'updateField',
      (cardsData: Array<CardType>, playersData: { [key: string]: PlayerType }) => {
        return callback(cardsData, playersData);
      }
    );
  }
}

export default new SocketIo();

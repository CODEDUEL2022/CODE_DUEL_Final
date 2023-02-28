import { io, Socket } from 'socket.io-client';
import { CardType } from '../types/Card';
import { PlayerType } from '../types/Player';

interface ServerToClientEvents {
  successRandomMatching: (game_id: string, user1_id: number, user2_id: number) => void; //FullRoom
  updateField: (cardsData: Array<CardType>, playersData: Array<PlayerType>) => void; //HPinfo
  gameStart: (user1: PlayerType, user: PlayerType) => void; // gameStart
}

interface ClientToServerEvents {
  enterWaitingRoom: (user_id: Number | undefined, user_name: String | undefined) => void; //AutoMatchingPreLogin
  exitWaitingRoom: (user_id: Number | undefined, user_name: String | undefined) => void; // LeaveWaitingRoom
  readyGameStart: (user: PlayerType) => void; //login
  joinRoom: (game_id: String, opponent_id: number) => void; // roomJoin
  sendCards: (
    cardsData: Array<CardType>,
    playersData: { [key: string]: PlayerType },
    game_id: String | undefined
  ) => void; //cardValue
}

class SocketIo {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3000/');
    console.log('Connecting Socket.io...');
  }

  readyGameStart(user: PlayerType) {
    this.socket?.emit('readyGameStart', user);
  }

  enterWaitingRoom(user_id: Number | undefined, user_name: String | undefined) {
    console.log(user_id);
    this.socket?.emit('enterWaitingRoom', user_id, user_name);
  }

  exitWaitingRoom(user_id: Number | undefined, user_name: String | undefined) {
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

  gameStart(callback: (user1: PlayerType, user: PlayerType) => void) {
    this.socket?.on('gameStart', (user1: PlayerType, user2: PlayerType) => {
      return callback(user1, user2);
    });
  }

  sendCards(
    cardsData: Array<CardType>,
    playersData: { [key: string]: PlayerType },
    game_id: String | undefined
  ) {
    this.socket?.emit('sendCards', cardsData, playersData, game_id);
  }

  updateField(callback: (cardsData: Array<CardType>, playersData: Array<PlayerType>) => void) {
    this.socket?.on('updateField', (cardsData: Array<CardType>, playersData: Array<PlayerType>) => {
      return callback(cardsData, playersData);
    });
  }
}

export default new SocketIo();

import { io, Socket } from 'socket.io-client';
import { CardType } from '../types/Card';
import { PlayerType } from '../types/Player';

interface ServerToClientEvents {
  successRandomMatching: (game_id: string, user1_id: number, user2_id: number) => void; //FullRoom
  updateField: (cardsData: Array<CardType>, user_id: number) => void; //HPinfo
  gameStart: (user1_id: number, user2_id: number) => void; // gameStart
}

interface ClientToServerEvents {
  enterWaitingRoom: (user_id: number) => void; //AutoMatchingPreLogin
  exitWaitingRoom: (user_id: number) => void; // LeaveWaitingRoom
  readyGameStart: (game_id: string, user_id: number) => void; //login
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

  readyGameStart(game_id: string, user_id: number) {
    this.socket?.emit('readyGameStart', game_id, user_id);
  }

  enterWaitingRoom(user_id: number) {
    console.log(user_id);
    this.socket?.emit('enterWaitingRoom', user_id);
  }

  exitWaitingRoom(user_id: number) {
    this.socket?.emit('exitWaitingRoom', user_id);
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

  gameStart(callback: (user1_id: number, user2_id: number) => void) {
    this.socket?.on('gameStart', (user_id: number, user2_id: number) => {
      return callback(user_id, user2_id);
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

  updateField(callback: (cardsData: Array<CardType>, user_id: number) => void) {
    this.socket?.on('updateField', (cardsData: Array<CardType>, user_id: number) => {
      return callback(cardsData, user_id);
    });
  }
}

export default new SocketIo();

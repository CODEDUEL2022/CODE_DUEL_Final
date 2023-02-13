import { io, Socket } from 'socket.io-client';
import { CardType } from '../types/Card';

interface ServerToClientEvents {
  readyRandomMatch: (game_id: string, user1_id: number, user2_id: number) => void; //FullRoom
  updateField: (cardData: Array<CardType>, user_id: number) => void; //HPinfo
  gameStart: (user_name: String) => void; // gameStart
}

interface ClientToServerEvents {
  enterWaitingRoom: (user_id: number) => void; //AutoMatchingPreLogin
  quitWaitingRoom: (user_id: number) => void; // LeaveWaitingRoom
  pushPlayPage: (game_id: string) => void; //login
  joinRoom: (game_id: String, opponent_id: number) => void; // roomJoin
  sendCard: (cardData: Array<CardType>, user_id: number) => void; //cardValue
}

class SocketIo {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3000/');
    console.log('Connecting Socket.io...');
  }

  pushPlayPage(game_id: string) {
    this.socket?.emit('pushPlayPage', game_id);
  }

  enterWaitingRoom(user_id: number) {
    console.log(user_id);
    this.socket?.emit('enterWaitingRoom', user_id);
  }

  quitWaitingRoom(user_id: number) {
    this.socket?.emit('quitWaitingRoom', user_id);
  }

  readyRandomMatch(callback: (game_id: string, user1_id: number, user2_id: number) => void) {
    this.socket?.on('readyRandomMatch', (game_id: string, user1_id: number, user2_id: number) => {
      return callback(game_id, user1_id, user2_id);
    });
  }

  joinRoom(game_id: String, opponent_id: number) {
    this.socket?.emit('joinRoom', game_id, opponent_id);
  }

  gameStart(callback: (user_name: String) => void) {
    this.socket?.on('gameStart', (user_name: String) => {
      return callback(user_name);
    });
  }

  sendCard(cardData: Array<CardType>, user_id: number) {
    this.socket?.emit('sendCard', cardData, user_id);
  }

  updateField(callback: (cardData: Array<CardType>, user_id: number) => void) {
    this.socket?.on('updateField', (cardData: Array<CardType>, user_id: number) => {
      return callback(cardData, user_id);
    });
  }
}

export default new SocketIo();

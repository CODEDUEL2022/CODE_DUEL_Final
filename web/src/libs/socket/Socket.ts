import { io, Socket } from 'socket.io-client';
import { CardType } from '../types/Card';

interface ServerToClientEvents {
  pushPlayPage: (room_id: String, player1_id: number, player2_id: number) => void; //FullRoom
  updateField: (card_data: Array<CardType>, player_id: number) => void; //HPinfo
  gameStart: (player_name: String) => void; // gameStart
}

interface ClientToServerEvents {
  matching: (player_id: number) => void; //AutoMatchingPreLogin
  quitWaitingRoom: (player_id: number) => void; // LeaveWaitingRoom
  enterWaitingRoom: (room_id: String) => void; //login
  joinRoom: (room_id: String, opponent_id: number) => void; // roomJoin
  sendCard: (card_data: Array<CardType>, player_id: number) => void; //cardValue
}

class SocketIo {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(
      'https://nl2nzrkpqe.execute-api.ap-northeast-1.amazonaws.com/CODE_DUEL_mock/@connections'
    );
    console.log('Connecting Socket.io...');
  }

  enterWaitingRoom(room_id: String) {
    this.socket?.emit('enterWaitingRoom', room_id);
  }

  matching(player_id: number) {
    this.socket?.emit('matching', player_id);
  }

  quitWaitingRoom(player_id: number) {
    this.socket?.emit('quitWaitingRoom', player_id);
  }

  pushPlayPage(callback: (room_id: String, player1_id: number, player2_id: number) => void) {
    this.socket?.on('pushPlayPage', (room_id: String, player1_id: number, player2_id: number) => {
      return callback(room_id, player1_id, player2_id);
    });
  }

  joinRoom(room_id: String, opponent_id: number) {
    this.socket?.emit('joinRoom', room_id, opponent_id);
  }

  gameStart(callback: (player_name: String) => void) {
    this.socket?.on('gameStart', (player_name: String) => {
      return callback(player_name);
    });
  }

  sendCard(card_data: Array<CardType>, player_id: number) {
    this.socket?.emit('sendCard', card_data, player_id);
  }

  updateField(callback: (card_data: Array<CardType>, player_id: number) => void) {
    this.socket?.on('updateField', (card_data: Array<CardType>, player_id: number) => {
      return callback(card_data, player_id);
    });
  }
}

export default new SocketIo();

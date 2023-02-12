import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
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
}

export default new SocketIo();

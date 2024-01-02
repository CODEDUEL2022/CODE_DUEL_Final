interface ServerToClientEvents {
  successRandomMatching: (
    room_id: number,
    user1_id: number,
    user2_id: number
  ) => void;
  updateField: (
    round: number,
    turn: number, // player id
    os: osType,
    combo: ComboType | null,
    cardsData: Array<CardType>,
    playersData: Array<PlayerType>
  ) => void;
  startGame: (turn: number, user1: PlayerType, user2: PlayerType) => void;
  finishGame: (winner: number, loser: number /* player id **/) => void;
}

interface ClientToServerEvents {
  enterWaitingRoom: (user_id: number, user_name: string) => void;
  exitWaitingRoom: (user_id: number, user_name: string) => void;
  enterPlayingRoom: (room_id: number, user: PlayerType) => void;
  exitPlayingRoom: (room_id: number, user: PlayerType) => void;
  sendCards: (
    room_id: number,
    user_id: number,
    combo: ComboType | null,
    cards: Array<CardType>
  ) => void;
}

type attackType = "attack" | "heal" | "absorption";
type osType = "windows" | "mac" | "linux";

interface ComboType {
  id: number;
  name: string;
  type: attackType;
  value: number;
}

interface CardType {
  id: number;
  name: string;
  type: attackType;
  value: number;
}

interface PlayerType {
  id: number;
  name: string;
  hp: number;
}

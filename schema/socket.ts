interface ServerToClientEvents {
  successRandomMatching: (
    room_id: number,
    player1_id: number,
    player2_id: number
  ) => void;
  updateField: (
    round: number,
    turn: number, // player id
    os: osType,
    combo: ComboType | null,
    cardsData: Array<CardType>,
    playersData: Array<PlayerType>
  ) => void;
  startGame: (turn: number, player1: PlayerType, player2: PlayerType) => void;
  finishGame: (winner: number, loser: number /* player id **/) => void;
}

interface ClientToServerEvents {
  enterWaitingRoom: (player_id: number, player_name: string) => void;
  exitWaitingRoom: (player_id: number, player_name: string) => void;
  enterPlayingRoom: (room_id: number, player: PlayerType) => void;
  exitPlayingRoom: (room_id: number, player: PlayerType) => void;
  sendCards: (
    room_id: number,
    player_id: number,
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

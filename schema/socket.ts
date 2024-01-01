interface ServerToClientEvents {
  successRandomMatching: (
    room_id: number,
    user1_id: number,
    user2_id: number
  ) => void;
  updateField: (
    turn: number,
    os: osType,
    combo: ComboType | null,
    cardsData: Array<CardType>,
    playersData: Array<PlayerType>
  ) => void;
  gameStart: (turn: number, user1: PlayerType, user2: PlayerType) => void;
}

interface ClientToServerEvents {
  enterWaitingRoom: (
    user_id: number | undefined,
    user_name: string | undefined
  ) => void;
  exitWaitingRoom: (
    user_id: number | undefined,
    user_name: string | undefined
  ) => void;
  readyGameStart: (user: PlayerType) => void;
  joinRoom: (game_id: string, opponent_id: number) => void;
  sendCards: (
    game_id: string | undefined,
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

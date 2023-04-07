export interface PlayerType {
  id: number | undefined;
  name: string | undefined;
  hp: number;
  sp: number;
  turn: boolean;
  game_id: string | undefined;
}

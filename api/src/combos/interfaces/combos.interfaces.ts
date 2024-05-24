import { Card } from 'src/cards/interfaces/cards.interfaces';

export interface Combo {
  id: number;
  name: string;
  type: 'ATTACK' | 'HEAL' | 'ABSORPTION';
  value: number;
}

export interface CardCombo {
  card_id: number;
  card: Card;
  combo_id: number;
  combo: Combo;
}

import { CardType } from './Card';

export interface DeckType {
  name: string;
  description: string;
  cards: Array<CardType>;
}

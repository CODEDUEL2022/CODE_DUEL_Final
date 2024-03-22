export type cardType = 'ATTACK' | 'HEAL' | 'ABSORPTION';

export interface CardProps {
  name: string;
  value: number;
  type: cardType;
}

export type DeckIdProps = Record<string, CardProps[]>;

export interface GetDeckInterface {
  name: string;
  cards: CardProps[];
}

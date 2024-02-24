/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * CODE_DUEL API
 * CODE_DUELのAPI仕様書です。
 * OpenAPI spec version: 1.0
 */
export type GetComboParams = {
/**
 * カードのID
 */
cards: number[];
};

export type SignInBody = {
  user_id?: number;
  user_name?: string;
};

export type SignUpBody = {
  user_name?: string;
};

export type ComboType = typeof ComboType[keyof typeof ComboType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ComboType = {
  attack: 'attack',
  heal: 'heal',
  absorption: 'absorption',
} as const;

export interface Combo {
  cards?: Card[];
  name?: string;
  type?: ComboType;
  value?: number;
}

export type CardType = typeof CardType[keyof typeof CardType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CardType = {
  attack: 'attack',
  heal: 'heal',
  absorption: 'absorption',
} as const;

export interface Card {
  name?: string;
  type?: CardType;
  value?: number;
}

export type Cards = Card[];

export interface Deck {
  cards?: Card[];
  name?: string;
}

export interface User {
  id?: number;
  name?: string;
}


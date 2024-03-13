/* eslint-disable */
export type User = {
  id?: string | undefined
  name?: string | undefined
}

export type Deck = {
  name?: string | undefined
  cards?: Card[] | undefined
}

export type Card = {
  name?: string | undefined
  value?: number | undefined
  type?: 'attack' | 'heal' | 'absorption' | undefined
}

export type Cards = Card[]

export type Combo = {
  name?: string | undefined
  cards?: Card[] | undefined
  type?: 'attack' | 'heal' | 'absorption' | undefined
  value?: number | undefined
}

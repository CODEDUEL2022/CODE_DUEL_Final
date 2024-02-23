export interface CardProps{
    name: string
    value: number
    type: 'ATTACK' | 'HEAL' | 'ABSORPTION'
}

export type DeckIdProps =  Record<string, CardProps[]>

export interface GetDeckInterface{
    name: string
    cards: CardProps[]
}

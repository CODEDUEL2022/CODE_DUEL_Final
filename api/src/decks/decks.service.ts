import { Injectable } from '@nestjs/common';
import { GetDeckInterface, DeckIdProps } from './interfaces/decks.interfaces';
import { resolve } from 'path';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})
@Injectable()
export class DecksService {
    async findAll(): Promise<any>{
        let deckIdObject: DeckIdProps = {} //COMMENT: データの整形を1回でうまくできなかったので、整形途中のものを保存する
        let result: GetDeckInterface[] = [] // COMMENT: 返り値
        const decks = await prisma.cardDeck.findMany({
            include: {
                card_deck_card_id: {
                    select: {
                        name: true,
                        value: true,
                        type: true
                    }
                },
                card_deck_deck_id: true
            }
        })

        decks.forEach((i) => {
            const deckName = i.card_deck_deck_id.name
            if(!deckName){return;}
            if(!deckIdObject[deckName])deckIdObject[deckName] = [i.card_deck_card_id]
            else deckIdObject[deckName].push(i.card_deck_card_id)
        })

        for(const i in deckIdObject){
            const deck = {
                "name": i,
                "cards": deckIdObject[i]
            }
            result.push(deck)
        }

        return new Promise(resolve => {
            resolve(result)
        })
    }
}
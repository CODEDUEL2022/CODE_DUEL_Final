import { Injectable } from '@nestjs/common';
import { GetDeckInterface, DeckIdProps } from './interfaces/decks.interfaces';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});
@Injectable()
export class DecksService {
  async findAll(): Promise<any> {
    const deckIdObject: DeckIdProps = {}; //COMMENT: データの整形を1回でうまくできなかったので、整形途中のものを保存する
    const result: GetDeckInterface[] = []; // COMMENT: 返り値
    const decks = await prisma.cardDeck.findMany({
      include: {
        card: {
          select: {
            name: true,
            value: true,
            type: true,
          },
        },
        deck: true,
      },
    });

    decks.forEach((i) => {
      const deckName = i.deck.name;
      if (!deckName) {
        return;
      }
      if (!deckIdObject[deckName]) deckIdObject[deckName] = [i.card];
      else deckIdObject[deckName].push(i.card);
    });

    for (const key in deckIdObject) {
      const deck = {
        name: key,
        cards: deckIdObject[key],
      };
      result.push(deck);
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CardCombo } from './interfaces/combos.interfaces';
import { PrismaClient } from '@prisma/client';
import { GetComboDto } from './dto/get-combo.dto';

const prisma = new PrismaClient({});

@Injectable()
export class CombosService {
  async getValidCombos(cardIds: number[]): Promise<GetComboDto[]> {
    const validCombos: GetComboDto[] = [];
    // cardのidのリストをセットにして重複を削除
    cardIds = [...new Set(cardIds)];

    const combos = await prisma.combo.findMany({
      where: {
        cards: {
          some: {
            card: {
              id: {
                in: cardIds,
              },
            },
          },
        },
      },
      include: {
        cards: {
          select: {
            card: true,
          },
        },
      },
    });
    for (const combo of combos) {
      const comboCardIds = combo.cards.map((card: CardCombo) => card.card.id);
      if (isSubset(comboCardIds, cardIds)) {
        validCombos.push({
          id: combo.id,
          name: combo.name,
          type: combo.type,
          value: combo.value,
          cards: combo.cards.map((card: CardCombo) => card.card),
        });
      }
    }
    return validCombos;
  }
}

function isSubset(a: number[], b: number[]): boolean {
  return a.every((num) => b.includes(num));
}

import { Injectable } from '@nestjs/common';
import { Card } from './interfaces/cards.interfaces';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});
@Injectable()
export class CardsService {
  findOne(id: number): Promise<Card[]> {
    const card = prisma.card.findMany({
      where: { id: Number(id) },
    });
    return new Promise((resolve) => {
      resolve(card);
    });
  }
  findAll(): Promise<Card[]> {
    const cards = prisma.card.findMany({});
    return new Promise((resolve) => {
      resolve(cards);
    });
  }
}

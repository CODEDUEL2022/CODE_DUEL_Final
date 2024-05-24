import { Controller, Get, Param } from '@nestjs/common';
import { Card } from './interfaces/cards.interfaces';
import { CardsService } from './cards.service';
@Controller('/cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  async getCardAll(): Promise<Card[]> {
    return await this.cardsService.findAll();
  }
  @Get(':id')
  async getCard(@Param('id') id: number): Promise<Card[]> {
    return await this.cardsService.findOne(id);
  }
}

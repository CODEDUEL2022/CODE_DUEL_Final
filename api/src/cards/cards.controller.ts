import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { GetCardInterface } from './interfaces/cards.interfaces';
import { CardsService } from './cards.service';
@Controller('/cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  async getCardAll(): Promise<GetCardInterface[]> {
    return await this.cardsService.findAll();
  }
  @Get(':id')
  async getCard(@Param('id') id: number): Promise<GetCardInterface[]> {
    return await this.cardsService.findOne(id);
  }
}

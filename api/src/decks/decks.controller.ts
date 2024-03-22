import { Controller, Get } from '@nestjs/common';
import { GetDeckInterface } from './interfaces/decks.interfaces';
import { DecksService } from './decks.service';
@Controller('/decks')
export class DecksController {
  constructor(private decksService: DecksService) {}

  @Get()
  async getCardAll(): Promise<GetDeckInterface> {
    return await this.decksService.findAll();
  }
}

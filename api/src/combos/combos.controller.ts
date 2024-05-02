import { Controller, Get, Query } from '@nestjs/common';
import { CombosService } from './combos.service';
import { GetComboDto } from './dto/get-combo.dto';
@Controller('/combo')
export class CombosController {
  constructor(private readonly combosService: CombosService) {}

  @Get()
  async getCombos(@Query('cards') cards: string): Promise<GetComboDto[]> {
    const cardIds: number[] = JSON.parse(cards);
    return this.combosService.getValidCombos(cardIds);
  }
}

import { IsInt, IsString } from 'class-validator';
import { Card } from 'src/cards/interfaces/cards.interfaces';

export type comboType = 'ATTACK' | 'HEAL' | 'ABSORPTION';

export class GetComboDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsInt()
  value: number;

  cards: Card[];
}

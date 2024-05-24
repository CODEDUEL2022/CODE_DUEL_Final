import { Module } from '@nestjs/common';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';

@Module({
  imports: [],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}

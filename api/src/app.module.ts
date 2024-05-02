import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { UsersModule } from './users/users.module';
import { DecksModule } from './decks/decks.module';
import { ComboModule } from './combos/combos.module';

@Module({
  imports: [CardsModule, DecksModule, UsersModule, ComboModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

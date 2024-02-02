-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('ATTACK');

-- CreateEnum
CREATE TYPE "ComboType" AS ENUM ('ATTACK');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deck" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "hand" INTEGER[],

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "uid" SERIAL NOT NULL,
    "player1" INTEGER NOT NULL,
    "player2" INTEGER NOT NULL,
    "round" INTEGER NOT NULL,
    "os" INTEGER NOT NULL,
    "turn" INTEGER NOT NULL,
    "winner" INTEGER NOT NULL,
    "loser" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "os_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "type" "CardType" NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardDeck" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "deck_id" INTEGER NOT NULL,

    CONSTRAINT "CardDeck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deck" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardCombo" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "combo_id" INTEGER NOT NULL,

    CONSTRAINT "CardCombo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Os" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Os_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Combo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ComboType" NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Combo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_player1_key" ON "Game"("player1");

-- CreateIndex
CREATE UNIQUE INDEX "Game_player2_key" ON "Game"("player2");

-- CreateIndex
CREATE UNIQUE INDEX "Game_turn_key" ON "Game"("turn");

-- CreateIndex
CREATE UNIQUE INDEX "Game_winner_key" ON "Game"("winner");

-- CreateIndex
CREATE UNIQUE INDEX "Game_loser_key" ON "Game"("loser");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_deck_fkey" FOREIGN KEY ("deck") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_player1_fkey" FOREIGN KEY ("player1") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_player2_fkey" FOREIGN KEY ("player2") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_os_fkey" FOREIGN KEY ("os") REFERENCES "Os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_turn_fkey" FOREIGN KEY ("turn") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winner_fkey" FOREIGN KEY ("winner") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_loser_fkey" FOREIGN KEY ("loser") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "Os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDeck" ADD CONSTRAINT "CardDeck_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDeck" ADD CONSTRAINT "CardDeck_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardCombo" ADD CONSTRAINT "CardCombo_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardCombo" ADD CONSTRAINT "CardCombo_combo_id_fkey" FOREIGN KEY ("combo_id") REFERENCES "Combo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

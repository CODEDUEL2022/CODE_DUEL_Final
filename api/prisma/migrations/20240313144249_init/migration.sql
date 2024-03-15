-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('ATTACK', 'HEAL', 'ABSORPTION');

-- CreateEnum
CREATE TYPE "ComboType" AS ENUM ('ATTACK', 'HEAL', 'ABSORPTION');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "OS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "OS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Combo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ComboType" NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Combo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "OS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDeck" ADD CONSTRAINT "CardDeck_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDeck" ADD CONSTRAINT "CardDeck_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardCombo" ADD CONSTRAINT "CardCombo_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardCombo" ADD CONSTRAINT "CardCombo_combo_id_fkey" FOREIGN KEY ("combo_id") REFERENCES "Combo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

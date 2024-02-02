/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CardType" ADD VALUE 'HEAL';
ALTER TYPE "CardType" ADD VALUE 'ABSORPTION';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ComboType" ADD VALUE 'HEAL';
ALTER TYPE "ComboType" ADD VALUE 'ABSORPTION';

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_loser_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_os_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_player1_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_player2_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_turn_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_winner_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_deck_fkey";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "Player";

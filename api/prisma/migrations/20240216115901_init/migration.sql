/*
  Warnings:

  - You are about to drop the `Os` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_os_id_fkey";

-- DropTable
DROP TABLE "Os";

-- CreateTable
CREATE TABLE "OS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "OS_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "OS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

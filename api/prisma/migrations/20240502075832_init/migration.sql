-- CreateTable
CREATE TABLE "_CardDeck" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CardCombo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardDeck_AB_unique" ON "_CardDeck"("A", "B");

-- CreateIndex
CREATE INDEX "_CardDeck_B_index" ON "_CardDeck"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CardCombo_AB_unique" ON "_CardCombo"("A", "B");

-- CreateIndex
CREATE INDEX "_CardCombo_B_index" ON "_CardCombo"("B");

-- AddForeignKey
ALTER TABLE "_CardDeck" ADD CONSTRAINT "_CardDeck_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDeck" ADD CONSTRAINT "_CardDeck_B_fkey" FOREIGN KEY ("B") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardCombo" ADD CONSTRAINT "_CardCombo_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardCombo" ADD CONSTRAINT "_CardCombo_B_fkey" FOREIGN KEY ("B") REFERENCES "Combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

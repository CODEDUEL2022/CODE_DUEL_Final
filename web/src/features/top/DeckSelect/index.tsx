import { DeckSelectPresentation } from './DeckSelectPresentation';
import { sampleCards } from 'libs/mocks/cards';
import { CardType } from 'libs/types/Card';

export const DeckSelect = () => {
  type DeckType = {
    name: string;
    description: string;
    cards: Array<CardType>;
  };

  const sampleDecks: Array<DeckType> = [
    {
      name: 'JavaScript',
      description: 'コンボをいっぱい作れるデッキだ！',
      cards: sampleCards,
    },
    {
      name: 'Python',
      description: 'バランスがいいデッキだ！',
      cards: sampleCards,
    },
    {
      name: 'C',
      description: '脳筋高火力デッキだ！',
      cards: sampleCards,
    },
  ];

  return (
    <>
      <DeckSelectPresentation cards={sampleCards} name="デッキ名" description="デッキの説明" />
    </>
  );
};

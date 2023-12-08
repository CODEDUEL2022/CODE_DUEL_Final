import { DeckSelectPresentation } from './DeckSelectPresentation';
import { sampleCards } from 'libs/mocks/cards';
import { DeckType } from 'libs/types/Deck';
import { useState } from 'react';

export const DeckSelect = () => {

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

  const [deck, setDeck] = useState(sampleDecks[0]);

  return (
    <>
      <DeckSelectPresentation deck={deck} />
    </>
  );
};

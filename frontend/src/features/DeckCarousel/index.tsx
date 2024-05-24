'use client';

import React from 'react';
import { DeckCarouselPresentation } from './presentations/';
import { useDeckCarousel } from './hooks/';

type Props = {};

export const DeckCarousel: React.FC<Props> = (props) => {
  const { deckName, cards, handlePrevDeck, handleNextDeck } = useDeckCarousel();

  return (
    <DeckCarouselPresentation
      deckName={deckName}
      cards={cards}
      handlePrevDeck={handlePrevDeck}
      handleNextDeck={handleNextDeck}
    />
  );
};

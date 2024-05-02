import { useState, useEffect } from 'react';
import { apiClient } from '@/utils/apiClient';
import { Deck } from '../../../../api/@types';

export const useDeckCarousel = () => {
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const [decks, setDecks] = useState<Deck[]>([]);

  const deckLength = decks.length;

  useEffect(() => {
    apiClient.deck
      .$get()
      .then((res) => {
        setDecks(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handlePrevDeck = () => {
    setCurrentDeckIndex((prev) => {
      if (prev === 0) {
        return deckLength - 1;
      }
      return prev - 1;
    });
  };

  const handleNextDeck = () => {
    setCurrentDeckIndex((prev) => {
      if (prev === deckLength - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return {
    deckName: decks[currentDeckIndex]?.name,
    cards: decks[currentDeckIndex]?.cards,
    handlePrevDeck,
    handleNextDeck,
  };
};

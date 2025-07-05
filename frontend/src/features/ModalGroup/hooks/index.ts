import { useEffect, useState } from 'react';
import { Card } from '../../../../api/@types';
import { Cards } from '../../../../api/@types';
import { apiClient } from '@/utils/apiClient';

type UseShowCardListModal = {
  cards: Cards;
  selectedCard: Card | null;
  handleSelectCard: (card: Card) => void;
  handleBack: () => void;
  cardDetailTexts: string[];
};

export const useShowCardListModal = (): UseShowCardListModal => {
  const [cards, setCards] = useState<Cards>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await apiClient.cards.$get();
        setCards(fetchedCards);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCards();
  }, []);

  const handleSelectCard = (card: Card) => {
    setSelectedCard(card);
  };

  const handleBack = () => {
    setSelectedCard(null);
  };

  const cardDetailTexts = selectedCard
    ? [selectedCard.name, selectedCard.type + ' ' + selectedCard.value + 'pt']
    : [];

  return {
    cards,
    selectedCard,
    handleSelectCard,
    handleBack,
    cardDetailTexts,
  };
};

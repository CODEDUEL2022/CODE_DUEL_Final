import React from 'react';
import { ModalGroupPresentation } from './presentations/';
import { useShowCardListModal } from './hooks';

type Props = {};

export const ModalGroup: React.FC<Props> = (props) => {
  const { cards, selectedCard, handleSelectCard, handleBack, cardDetailTexts } =
    useShowCardListModal();
  return (
    <ModalGroupPresentation
      cards={cards}
      selectedCard={selectedCard}
      handleSelectCard={handleSelectCard}
      handleBack={handleBack}
      cardDetailTexts={cardDetailTexts}
    />
  );
};

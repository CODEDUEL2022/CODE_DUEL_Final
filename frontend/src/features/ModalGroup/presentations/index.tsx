import React from 'react';
import styled from './index.module.scss';
import { ModalButton } from '@/commons/ModalButton';
import { BsFile } from 'react-icons/bs';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Cards } from '../../../../api/@types';
import { Card } from '../../../../api/@types';
import { CardListContents } from './cardListContents';

type Props = {
  cards: Cards;
  selectedCard: Card | null;
  handleSelectCard: (card: Card) => void;
  handleBack: () => void;
  cardDetailTexts: string[];
};

export const ModalGroupPresentation: React.FC<Props> = ({
  cards,
  selectedCard,
  handleSelectCard,
  handleBack,
  cardDetailTexts,
}) => {
  return (
    <div className={styled.wrapper}>
      <ModalButton icon={BsFile} text="カード一覧" modalLabel="カード一覧">
        <CardListContents
          cards={cards}
          selectedCard={selectedCard}
          handleSelectCard={handleSelectCard}
          handleBack={handleBack}
          cardDetailTexts={cardDetailTexts}
        />
      </ModalButton>
      <ModalButton
        icon={IoIosInformationCircleOutline}
        text="遊び方"
        modalLabel="CODE_DUELの遊び方"
      >
        <h1>遊び方</h1>
      </ModalButton>
    </div>
  );
};

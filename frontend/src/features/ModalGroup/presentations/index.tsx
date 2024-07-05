import React from 'react';
import styled from './index.module.scss';
import { ModalButton } from '@/commons/ModalButton';
import { BsFile } from 'react-icons/bs';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Cards } from '../../../../api/@types';
import { Card } from '../../../../api/@types';
import { useState } from 'react';
import { IconButton } from '@/commons/IconButton';
import { IoArrowBack } from 'react-icons/io5';
import { Terminal } from '@/commons/Terminal';

type Props = {
  cards: Cards;
};

export const ModalGroupPresentation: React.FC<Props> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleSelectCard = (card: Card) => {
    setSelectedCard(card);
  };

  const handleBack = () => {
    setSelectedCard(null);
  };

  const cardDetailTexts = selectedCard
    ? [selectedCard.name, selectedCard.type + ' ' + selectedCard.value + 'pt']
    : [];

  return (
    <div className={styled.wrapper}>
      <ModalButton icon={BsFile} text="カード一覧" modalLabel="カード一覧">
        {selectedCard ? (
          <div className={styled.cardDetail}>
            <img src={selectedCard.image_src} className={styled.image} />
            <div className={styled.right}>
              <Terminal texts={cardDetailTexts} />
              <IconButton icon={IoArrowBack} handleClick={handleBack} text="back" />
            </div>
          </div>
        ) : (
          <div className={styled.container}>
            <h1 className={styled.title}>カード一覧</h1>
            <ul className={styled.list}>
              {cards.map((card) => (
                <li key={card.name} className={styled.listItem}>
                  <button className={styled.button} onClick={() => handleSelectCard(card)}>
                    <img src={card.image_src} alt={card.name} className={styled.image} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
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

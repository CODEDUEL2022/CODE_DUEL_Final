import React from 'react';
import styled from './index.module.scss';
import { Cards } from '../../../../../api/@types';
import { Card } from '../../../../../api/@types';
import { IconButton } from '@/commons/IconButton';
import { IoArrowBack } from 'react-icons/io5';
import { Terminal } from '@/commons/Terminal';

type Props = {
  cards: Cards;
  selectedCard: Card | null;
  handleSelectCard: (card: Card) => void;
  handleBack: () => void;
  cardDetailTexts: string[];
};

export const CardListContents: React.FC<Props> = ({
  cards,
  selectedCard,
  handleSelectCard,
  handleBack,
  cardDetailTexts,
}) => {
  return (
    <>
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
    </>
  );
};

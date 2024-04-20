import React from 'react';
import styled from './index.module.scss';
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { Button } from '@/ui/Button';
import { Cards } from '../../../../api/@types';
import Image from 'next/image';

type Props = {
  deckName: string;
  cards: Cards;
  handlePrevDeck: () => void;
  handleNextDeck: () => void;
};

export const DeckCarouselPresentation: React.FC<Props> = ({
  deckName,
  cards,
  handlePrevDeck,
  handleNextDeck,
}) => {
  return (
    <div className={styled.container}>
      <div className={styled.titleWrapper}>
        <button className={styled.moveButton} onClick={handlePrevDeck}>
          <MdNavigateBefore size={24} />
        </button>
        <div className={styled.title}>{deckName}</div>
        <button className={styled.moveButton} onClick={handleNextDeck}>
          <MdNavigateNext size={24} />
        </button>
      </div>
      <div className={styled.deckList}>
        {cards.map((card) => (
          <Image
            key={card.name}
            src={card.image_src}
            alt={card.name}
            width={32}
            height={48}
            className={styled.deckItem}
          />
        ))}
      </div>
      <Button size="sm" text={`${deckName}を選択`} />
    </div>
  );
};

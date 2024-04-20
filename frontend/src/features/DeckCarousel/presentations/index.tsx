import React from 'react';
import styled from './index.module.scss';
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { Button } from '@/ui/Button';

type Props = {};

export const DeckCarouselPresentation: React.FC<Props> = (props) => {
  return (
    <div className={styled.container}>
      <div className={styled.titleWrapper}>
        <button className={styled.moveButton}>
          <MdNavigateBefore size={24} />
        </button>
        <div className={styled.title}>JS Deck</div>
        <button className={styled.moveButton}>
          <MdNavigateNext size={24} />
        </button>
      </div>
      <div className={styled.deckList}>
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
        <img
          src="https://via.placeholder.com/32x48"
          alt="JS Deck"
          className={styled.deckItem}
          width={32}
          height={48}
        />
      </div>
      <Button size="sm" text="JS Deckを選択" />
    </div>
  );
};

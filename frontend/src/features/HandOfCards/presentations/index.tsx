import React, { CSSProperties } from 'react';
import styled from './index.module.scss';
import { Card } from '@/commons/Card';
import { Card as CardType } from '../../../../api/@types';

type Props = {
  cards: CardType[];
};

export const HandOfCardsPresentation: React.FC<Props> = ({ cards }) => {
  return (
    <ul className={styled.deck} style={{ '--length': cards.length } as React.CSSProperties}>
      {cards.map((card, index) => (
        <li key={card.name} className={styled.list}>
          <div className={styled.card} style={{ '--index': index } as React.CSSProperties}>
            <Card card={card} />
          </div>
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { CardType } from '../../../libs/types/Card';

interface CardProps {
  id: UniqueIdentifier;
  card: CardType | undefined;
}

export const Card: React.FC<CardProps> = (props) => {
  const { id, card } = props;

  return (
    <div
      style={{
        width: '100px',
        height: '200px',
        border: 'solid 1px #000',
      }}
    >
      {card === undefined ? (
        <div></div>
      ) : (
        <img
          src={card.img_src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        ></img>
      )}
    </div>
  );
};

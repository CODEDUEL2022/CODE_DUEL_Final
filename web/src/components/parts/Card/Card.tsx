import React from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { CardType } from '../../../libs/types/Card';

interface CardProps {
  id: UniqueIdentifier;
  card: CardType;
}

export const Card: React.FC<CardProps> = (props) => {
  const { id, card } = props;

  return (
    <div
      style={{
        width: '100px',
        height: '200px',
        backgroundColor: '#fff',
        border: 'solid 1px #000',
      }}
    >
      {id}
    </div>
  );
};

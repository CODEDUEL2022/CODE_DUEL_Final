import React from 'react';
import { CardType } from '../../../libs/types/Card';

interface CardProps {
  card: CardType | undefined;
}

export const Card: React.FC<CardProps> = (props) => {
  const { card } = props;

  return (
    <div
      style={{
        width: '100px',
        height: '120px',
        borderRadius: '5px',
        backgroundColor: '#fff',
      }}
    >
      {card === undefined ? (
        <div></div>
      ) : (
        <img
          src={card.img_src}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          loading="lazy"
        ></img>
      )}
    </div>
  );
};

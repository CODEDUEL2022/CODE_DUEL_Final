import React, { useState } from 'react';
import { CardType } from '../../../libs/types/Card';
import { Card } from '../../../components/parts/Card/Card';

interface CardProps {
  card: CardType;
  isActive: boolean;
  onClick: (id: number) => void;
}

export const FieldCard: React.FC<CardProps> = (props) => {
  const { card, isActive, onClick } = props;

  const handleClick = () => {
    if (!card.isSelected && !isActive) return;
    onClick(card.id);
  };

  return (
    <>
      <div className="overlay" onClick={handleClick}>
        <Card card={card} />
        {/* card.isSelected がfalseかつ isActiveがfalseなら表示 */}
        {!card.isSelected && !isActive && <div className="blur"></div>}
      </div>
      <style jsx>{`
        .overlay {
          position: relative;
          transition: transform 0.2s ease;
          transform: ${card.isSelected ? 'translateY(-10px)' : ''};
          height: 120px;
        }

        .blur {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgb(0, 0, 0, 30%);
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

import React from 'react';
import { CardType } from '../../../libs/types/Card';
import { FieldCard } from '../parts/FieldCard';

interface CardProps {
  cards: Array<CardType> | undefined;
  handleClick: (id: number) => void;
  ableUseCardIds: Array<number>;
}

export const FieldCards: React.FC<CardProps> = (props) => {
  const { cards, handleClick, ableUseCardIds } = props;

  return (
    <>
      <div className="card-container">
        {cards?.map((card) => (
          <FieldCard
            card={card}
            isActive={ableUseCardIds.some((id) => id === card.id)}
            onClick={handleClick}
          ></FieldCard>
        ))}
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

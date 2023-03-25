import React from 'react';
import { CardType } from '../../../libs/types/Card';
import { FieldCard } from '../parts/FieldCard';

interface CardProps {
  cards: Array<CardType> | undefined;
}

export const FieldCards: React.FC<CardProps> = (props) => {
  const { cards } = props;

  return (
    <>
      <div className="card-container">
        {cards?.map((card) => (
          <FieldCard card={card}></FieldCard>
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

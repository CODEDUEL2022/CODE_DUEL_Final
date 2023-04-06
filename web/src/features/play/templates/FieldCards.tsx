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
          <div className="card">
            <FieldCard
              card={card}
              isActive={ableUseCardIds.some((id) => id === card.id)}
              onClick={handleClick}
            ></FieldCard>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          padding: 20px;
        }
        .card:nth-child(1) {
          transform: rotate(-20deg) translate(40px, 70px);
        }
        .card:nth-child(2) {
          transform: rotate(-10deg) translate(30px, 24px);
        }
        .card:nth-child(3) {
          transform: rotate(-3deg) translate(10px, 0);
        }
        .card:nth-child(4) {
          transform: rotate(3deg) translate(-10px, 0);
        }
        .card:nth-child(5) {
          transform: rotate(10deg) translate(-30px, 24px);
        }
        .card:nth-child(6) {
          transform: rotate(20deg) translate(-40px, 70px);
        }
      `}</style>
    </>
  );
};

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
        }
        .card:nth-child(1) {
          transform: rotate(-20deg) translate(40px, 40px);
        }
        .card:nth-child(2) {
          transform: rotate(-10deg) translate(30px, 12px);
        }
        .card:nth-child(3) {
          transform: rotate(-3deg) translate(10px, 0);
        }
        .card:nth-child(4) {
          transform: rotate(3deg) translate(-10px, 0);
        }
        .card:nth-child(5) {
          transform: rotate(10deg) translate(-30px, 12px);
        }
        .card:nth-child(6) {
          transform: rotate(20deg) translate(-40px, 40px);
        }
        @media screen and (min-width: 900px) {
          .card:nth-child(1) {
            transform: rotate(-24deg) translate(46px, 60px);
          }
          .card:nth-child(2) {
            transform: rotate(-12deg) translate(36px, 18px);
          }
          .card:nth-child(3) {
            transform: rotate(-3deg) translate(12px, 0);
          }
          .card:nth-child(4) {
            transform: rotate(3deg) translate(-12px, 0);
          }
          .card:nth-child(5) {
            transform: rotate(12deg) translate(-36px, 18px);
          }
          .card:nth-child(6) {
            transform: rotate(24deg) translate(-46px, 60px);
          }
        }
        @media screen and (min-width: 1400px) {
          .card:nth-child(1) {
            transform: rotate(-24deg) translate(60px, 92px);
          }
          .card:nth-child(2) {
            transform: rotate(-12deg) translate(48px, 28px);
          }
          .card:nth-child(3) {
            transform: rotate(-3deg) translate(16px, 0);
          }
          .card:nth-child(4) {
            transform: rotate(3deg) translate(-16px, 0);
          }
          .card:nth-child(5) {
            transform: rotate(12deg) translate(-48px, 28px);
          }
          .card:nth-child(6) {
            transform: rotate(24deg) translate(-60px, 92px);
          }
        }
      `}</style>
    </>
  );
};

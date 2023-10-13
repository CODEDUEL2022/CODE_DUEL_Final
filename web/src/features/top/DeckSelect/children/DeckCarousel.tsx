import React from 'react';
import { SiJavascript } from 'react-icons/si';

interface DeckCarouselProps {}

export const DeckCarousel: React.FC<DeckCarouselProps> = (props) => {
  const {} = props;

  return (
    <>
      <div style={{ color: 'white' }} className="container">
        <div className="deck-title">
          <SiJavascript size="64" color="white" />
          <span>JS Deck</span>
        </div>
        <p className="deck-description">攻撃力が低いが、コンボを多く作りやすいデッキ</p>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
        }

        .deck-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 20px;
          font-weight: 100;
        }

        .deck-description {
          margin: 0;
          font-size: 10px;
        }
      `}</style>
    </>
  );
};

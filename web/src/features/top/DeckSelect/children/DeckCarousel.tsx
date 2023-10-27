import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { CardType } from 'libs/types/Card';
import Image from 'next/image';

interface DeckCarouselProps {
  name: string;
  description: string;
  cards: Array<CardType>;
}

export const DeckCarousel: React.FC<DeckCarouselProps> = (props) => {
  const { name, description, cards } = props;

  return (
    <>
      <div style={{ color: 'white' }} className="container">
        <div className="deck-title">
          {/* TODO: nameによってアイコンを変更する。 */}
          <SiJavascript size="64" color="white" />
          <span>{name} Deck</span>
        </div>
        <p className="deck-description">{description}</p>
        <div className="card-wrapper">
          {cards.map((card) => (
            <Image src={card.img_src} width="87" height="100" key={card.id} alt={card.name} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
          width: 500px;
        }

        .deck-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 20px;
          font-weight: 100;
        }

        .card-wrapper {
          display: grid;
          gap: 16px 8px;
          grid-template-columns: repeat(5, 1fr);
          border: 1px solid white;
          padding: 8px;
        }
        .deck-description {
          margin: 0;
          font-size: 10px;
        }
      `}</style>
    </>
  );
};

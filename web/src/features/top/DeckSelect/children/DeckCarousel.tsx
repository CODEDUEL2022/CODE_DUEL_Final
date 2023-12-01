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
        <div className="cards-wrapper">
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
          width: 100%;
          height: 100%;
        }

        .deck-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 20px;
          font-weight: 100;
        }

        .cards-wrapper {
          display: grid;
          grid-template-columns: repeat(6, 0fr);
          justify-content: center;
          flex-direction: row;
          gap: 16px 8px;
          border: 1px solid white;
          padding: 8px;
          width: calc(100% - 16px);
          height: 100%;
        }
        .deck-description {
          margin: 0;
          font-size: 10px;
        }
      `}</style>
    </>
  );
};

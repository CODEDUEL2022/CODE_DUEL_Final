import React from 'react';
import { DeckCarousel } from './children/DeckCarousel';
import { DeckType } from 'libs/types/Deck';

interface DeckSelectProps {
  deck: DeckType;
}

export const DeckSelectPresentation: React.FC<DeckSelectProps> = ({ deck }) => {
  return (
    <>
      <div className="container">
        <DeckCarousel cards={deck.cards} name={deck.name} description={deck.description} />
      </div>
      <style jsx>{`
        .container {
          background-color: rgba(14, 49, 69, 0.7);
          padding: 16px;
          width: 100%;
          height: calc(100% - 32px);
        }
      `}</style>
    </>
  );
};

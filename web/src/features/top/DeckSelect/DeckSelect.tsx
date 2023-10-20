import React from 'react';
import { DeckCarousel } from './children/DeckCarousel';
import { sampleCards } from 'libs/mocks/cards';

interface DeckSelectProps {}

export const DeckSelect: React.FC<DeckSelectProps> = (props) => {
  const {} = props;

  return (
    <div>
      <DeckCarousel cards={sampleCards} name="Sample" description="Sample" />
    </div>
  );
};

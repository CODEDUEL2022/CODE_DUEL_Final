import React from 'react';
import { DeckCarousel } from './children/DeckCarousel';

interface DeckSelectProps {}

export const DeckSelect: React.FC<DeckSelectProps> = (props) => {
  const {} = props;

  return (
    <div>
      <DeckCarousel />
    </div>
  );
};

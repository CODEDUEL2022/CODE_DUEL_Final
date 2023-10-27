import {DeckSelectPresentation} from './DeckSelectPresentation';
import { sampleCards } from 'libs/mocks/cards';

export const DeckSelect = () => {
  return (
    <>
      <DeckSelectPresentation 
        cards={sampleCards}
        name='デッキ名'
        description='デッキの説明'
      />
    </>
  );
};
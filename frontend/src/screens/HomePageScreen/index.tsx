import styled from './index.module.scss';
import { DeckCarousel } from '@/features/DeckCarousel';
import { ProfileStatus } from '@/features/ProfileStatus';
import { MatchButtons } from '@/features/MatchButtons';
import { ModalGroup } from '@/features/ModalGroup';

export const HomePageScreen: React.FC = () => {
  return (
    <main className={styled.container}>
      <div className={styled.deckContainer}>
        <DeckCarousel />
      </div>
      <div className={styled.sidebar}>
        <div className={styled.profileAndButtons}>
          <ProfileStatus />
          <MatchButtons />
        </div>
        <div>
          <ModalGroup />
        </div>
      </div>
    </main>
  );
};

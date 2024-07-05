import { TopTitle } from '@/ui/TopTitle';
import styled from './index.module.scss';
import { TopFormAndLink } from '@/features/TopFormAndLink';
import { ModalGroup } from '@/features/ModalGroup';

export const TopPageScreen: React.FC = () => {
  return (
    <main className={styled.container}>
      <TopTitle />
      <TopFormAndLink />
      <div className={styled.modals}>
        <ModalGroup />
      </div>
    </main>
  );
};

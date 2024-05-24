import { TopTitle } from '@/ui/TopTitle';
import styled from './index.module.scss';
import { TopFormAndLink } from '@/features/TopFormAndLink';

export const TopPageScreen: React.FC = () => {
  return (
    <main className={styled.container}>
      <TopTitle />
      <TopFormAndLink />
    </main>
  );
};

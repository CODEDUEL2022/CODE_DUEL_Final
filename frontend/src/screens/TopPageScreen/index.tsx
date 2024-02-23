import { TextInput } from '@/ui/TextInput';
import { TopLink } from '@/features/TopLink';
import { TopTitle } from '@/features/TopTitle';
import styled from './index.module.scss';

export const TopPageScreen: React.FC = () => {
  return (
    <main className={styled.container}>
      <TopTitle />
      <div className={styled.formAndLink}>
        <TextInput label="name" placeholder="ユーザーネームを入力" error="入力して" />
        <TopLink />
      </div>
    </main>
  );
};

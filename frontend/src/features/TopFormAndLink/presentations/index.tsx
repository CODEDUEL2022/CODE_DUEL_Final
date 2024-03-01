import React from 'react';
import styled from './index.module.scss';
import { TextInput } from '@/ui/TextInput';

type Props = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TopFormAndLinkPresentation: React.FC<Props> = ({
  value,
  handleChange,
  error,
  handleSubmit,
}) => {
  return (
    <div className={styled.formAndLink}>
      <TextInput
        label="name"
        placeholder="ユーザーネームを入力"
        required
        value={value}
        handleChange={handleChange}
        error={error}
      />
      <button
        type="button"
        className={styled.link}
        aria-label="CODE_DUELにログイン"
        onClick={handleSubmit}
      >
        &gt; Hello, world!
      </button>
    </div>
  );
};

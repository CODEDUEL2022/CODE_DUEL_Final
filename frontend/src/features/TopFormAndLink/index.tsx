'use client';

import React, { useState } from 'react';
import { TopFormAndLinkPresentation } from './presentations/';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/utils/apiClient';

type Props = {};

export const TopFormAndLink: React.FC<Props> = (props) => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (value === '') {
      setError('ユーザーネームを入力してください');
      return;
    }

    apiClient.signUp
      .$post({ body: { user_name: value } })
      .then(() => {
        router.push('/rooms');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <TopFormAndLinkPresentation
      value={value}
      handleChange={handleChange}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};
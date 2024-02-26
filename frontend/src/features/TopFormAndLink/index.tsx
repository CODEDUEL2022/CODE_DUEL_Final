'use client';

import React, { useState } from 'react';
import { TopFormAndLinkPresentation } from './presentations/';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/utils/apiClient';

type Props = {};

export const TopFormAndLink: React.FC<Props> = (props) => {
  const user_id = localStorage.getItem('user_id') || '';
  const user_name = localStorage.getItem('user_name') || '';

  const router = useRouter();
  const [name, setName] = useState(user_name);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (name === '') {
      setError('ユーザーネームを入力してください');
      return;
    }

    if (user_id) {
      apiClient.signIn
        .$post({ body: { user_id, user_name: name } })
        .then((res) => {
          const { id, name } = res;
          console.log(res);
          if (id && name) {
            localStorage.setItem('user_id', id);
            localStorage.setItem('user_name', name);
            router.push('/home');
          }
        })
        .catch((e) => {
          console.error(e);
        });
      return;
    }

    apiClient.signUp
      .$post({ body: { user_name: name } })
      .then((res) => {
        const { id, name } = res;
        console.log(res);
        if (id && name) {
          localStorage.setItem('user_id', id);
          localStorage.setItem('user_name', name);
          router.push('/home');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <TopFormAndLinkPresentation
      value={name}
      handleChange={handleChange}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

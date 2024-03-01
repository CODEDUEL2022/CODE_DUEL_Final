import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { apiClient } from '@/utils/apiClient';

export const useTopFormAndLink = () => {
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

    if (name === '') return setError('ユーザーネームを入力してください');

    user_id ? signIn() : signUp();
  };

  // TODO：エラーハンドリング
  const signIn = function () {
    apiClient.signIn
      .$post({ body: { user_name: name } })
      .then((res) => {
        const { id, name } = res;
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
  };

  // TODO：エラーハンドリング
  const signUp = function () {
    apiClient.signUp
      .$post({ body: { user_name: name } })
      .then((res) => {
        const { id, name } = res;
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
  };

  return {
    name,
    handleChange,
    error,
    handleSubmit,
  };
};

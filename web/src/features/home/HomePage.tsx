import React from 'react';
import axios from 'axios';

export const HomePage = () => {
  const signIn = () => {
    axios
      .get('http://localhost:3000/auth/google')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const signUp = () => {
    console.log('サインアップ');
  };

  return (
    <div>
      ホームです
      <button onClick={signIn}>ログイン</button>
      <button onClick={signUp}>サインアップ</button>
      <a href='http://localhost:3000/auth/google'>中身</a>
    </div>
  );
};

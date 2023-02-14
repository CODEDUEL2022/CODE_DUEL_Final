import React from 'react';
import { useRouter } from 'next/router';
import Socket from '../../libs/socket/Socket';

export const HomePage = () => {
  // TODO: バックから持ってくる
  const user_id = Math.floor(Math.random() * 100000);
  const user = {
    id: user_id,
    name: 'yusaku',
  };
  const dec = 2;

  // TODO: 入力するようにする
  const game_id = 'mockRoom';

  const router = useRouter();

  const startAutoMatching = () => {
    Socket.setupSocketConnection();
    router.push({
      pathname: '/waiting/',
      query: { id: user.id, name: user.name, dec: dec },
    });
  };

  const startCustomMatch = () => {
    Socket.setupSocketConnection();
    Socket.readyCustomMatch(game_id, user_id);
    router.push({
      pathname: '/play',
      query: { id: game_id, user: user.id },
    });
  };

  return (
    <div>
      ホームです
      <button onClick={startAutoMatching}>オートマッチング</button>
      <button onClick={startCustomMatch}>カスタムマッチ</button>
    </div>
  );
};

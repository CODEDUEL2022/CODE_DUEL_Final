import React from 'react';
import Socket from '../../libs/socket/Socket';
import { useRouter } from 'next/router';

export const HomePage = () => {
  // TODO: バックから持ってくる
  const user_id = Math.floor(Math.random() * 100000);
  const user = {
    id: user_id,
    name: 'yusaku',
  };
  const dec = 2;

  const router = useRouter();

  const startAutoMatching = () => {
    Socket.setupSocketConnection();
    Socket.enterWaitingRoom(user.id);
    router.push({
      pathname: '/waiting/',
      query: {
        id: user.id,
        name: user.name,
        dec: dec,
      },
    });
  };

  return (
    <div>
      ホームです
      <button onClick={startAutoMatching}>オートマッチング</button>
    </div>
  );
};

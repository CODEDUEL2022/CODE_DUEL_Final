import React from 'react';
import Socket from '../../libs/socket/Socket';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const WaitingPage = () => {
  const router = useRouter();

  // 状態管理したほうがいいかも
  const queryParams = new URLSearchParams(window.location.search);
  const user_id = Number(queryParams.get('id'));
  const user_name = queryParams.get('name');

  useEffect(() => {
    Socket.enterWaitingRoom(user_id, user_name);
    console.log('enter');
  }, []);

  const exitWaitingRoom = () => {
    Socket.exitWaitingRoom(user_id, user_name);
    router.push({ pathname: '/' });
  };

  Socket.successRandomMatching((game_id, user1_id, user2_id) => {
    const pushPlayPage = () => {
      router.push({
        pathname: '/play',
        query: { id: game_id, userid: user_id, name: user_name },
      });
    };
    // TODO: /playerDataでバックにplayer情報を送信
    if (user_id === user1_id || user2_id) pushPlayPage();
  });

  return (
    <div>
      <button onClick={exitWaitingRoom}>home</button>
    </div>
  );
};

import React from 'react';
import Socket from '../../libs/socket/Socket';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const WaitingPage = () => {
  const router = useRouter();

  // 状態管理したほうがいいかも
  const queryParams = new URLSearchParams(window.location.search);
  const user_id = Number(queryParams.get('id'));

  useEffect(() => {
    Socket.enterWaitingRoom(user_id);
    console.log('enter');
  }, []);

  const exitWaitingRoom = () => {
    Socket.exitWaitingRoom(user_id);
    router.push({ pathname: '/' });
  };

  Socket.successRandomMatching((game_id, user1_id, user2_id) => {
    const pushPlayPage = () => {
      router.push({
        pathname: '/play',
        query: { id: game_id, user: user_id },
      });
    };
    // TODO: /playerDataでバックにplayer情報を送信
    if (user_id === user1_id) pushPlayPage();
    if (user_id === user2_id) setTimeout(pushPlayPage, 1000); // 同時にルームに入るのを防ぐ
  });

  return (
    <div>
      <button onClick={exitWaitingRoom}>home</button>
    </div>
  );
};

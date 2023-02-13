import React from 'react';
import Socket from '../../libs/socket/Socket';
import { useRouter } from 'next/router';

export const WaitingPage = () => {
  const router = useRouter();

  const queryParams = new URLSearchParams(window.location.search);
  const user_id = Number(queryParams.get('id'));

  const quitWaitingRoom = () => {
    Socket.quitWaitingRoom(user_id);
    router.push({ pathname: '/' });
  };

  Socket.readyRandomMatch((game_id, user1_id, user2_id) => {
    // TODO: /playerDataでバックにplayer情報を送信

    if (user_id === user1_id || user2_id) {
      router.push({
        pathname: '/play',
        query: {
          room: game_id,
          id: user_id,
        },
      });
    }
  });

  return (
    <div>
      <button onClick={quitWaitingRoom}>home</button>
    </div>
  );
};

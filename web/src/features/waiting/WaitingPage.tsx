import React from 'react';
import Socket from '../../libs/socket/Socket';
import { useRouter } from 'next/router';

export const WaitingPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const router = useRouter();

  const quitWaitingRoom = () => {
    const user_id = Number(queryParams.get('id'));
    Socket.quitWaitingRoom(user_id);
    router.push({ pathname: '/' });
  };

  return (
    <div>
      <button onClick={quitWaitingRoom}>home</button>
    </div>
  );
};

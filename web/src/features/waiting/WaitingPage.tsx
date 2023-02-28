import React, { useContext } from 'react';
import Socket from '../../libs/socket/Socket';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { UserContext } from '../../libs/store/PlayerContext';
import { GameIdContext } from '../../libs/store/PlayerContext';

export const WaitingPage = () => {
  const router = useRouter();
  const { userInfo } = useContext(UserContext);
  const { gameId, setGameId } = useContext(GameIdContext);

  useEffect(() => {
    Socket.enterWaitingRoom(userInfo?.id, userInfo?.name);
    console.log('enter');
  }, []);

  const exitWaitingRoom = () => {
    Socket.exitWaitingRoom(userInfo?.id, userInfo?.name);
    router.push({ pathname: '/' });
  };

  Socket.successRandomMatching((game_id, user1_id, user2_id) => {
    const pushPlayPage = () => {
      setGameId(game_id);
      router.push('/play');
    };
    // TODO: /playerDataでバックにplayer情報を送信
    if (userInfo?.id === user1_id || user2_id) pushPlayPage();
  });

  return (
    <div>
      <button onClick={exitWaitingRoom}>home</button>
    </div>
  );
};

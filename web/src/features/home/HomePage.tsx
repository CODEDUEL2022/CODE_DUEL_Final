import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Socket from '../../libs/socket/Socket';
import { UserContext } from '../../libs/store/PlayerContext';
import { GameIdContext } from '../../libs/store/PlayerContext';
import { SubButton } from '../../components/parts/SubButton/SubButton';

export const HomePage = () => {
  const { setUserInfo } = useContext(UserContext);
  const { setGameId } = useContext(GameIdContext);

  useEffect(() => {
    // TODO: ログイン時、バックから取得する
    const user_id = Math.floor(Math.random() * 100000);
    const user = {
      id: user_id,
      name: 'yusaku',
    };
    const dec = 2;

    setUserInfo(user);
  }, []);

  const router = useRouter();

  const startAutoMatching = () => {
    Socket.setupSocketConnection();
    router.push('/waiting/');
  };

  const startCustomMatch = () => {
    const game_id = 'mockRoom';
    setGameId(game_id);
    Socket.setupSocketConnection();
    router.push('/play');
  };

  return (
    <div>
      ホームです
      <button onClick={startAutoMatching}>ログイン</button>
      <button onClick={startCustomMatch}>サインアップ</button>
      <SubButton></SubButton>
    </div>
  );
};

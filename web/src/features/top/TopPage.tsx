import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Socket from '../../libs/socket/Socket';
import { UserContext } from '../../libs/store/PlayerContext';
import { GameIdContext } from '../../libs/store/PlayerContext';
import axios from 'axios';

export const TopPage = () => {
  const { setUserInfo } = useContext(UserContext);
  const { setGameId } = useContext(GameIdContext);

  useEffect(() => {
    //COMMENT: 初期化
    let user_id;
    let user_name;
    let user;
    axios
      .get('http://localhost:3000/api/user/user_login', { withCredentials: true })
        .then((res) => {
          console.log(res.data)
          user_id = res.data.id
          user_name = res.data.name
          user = {
            id: user_id,
            name: user_name,
          };
          setUserInfo(user);
        })
      .catch((err) => console.log(err));
    
    const dec = 2;
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

  const testButton = () => {
    //COMMENT: 機能テスト用関数
    axios
      .post('http://localhost:3000/api/match/in/draw_card',{
        card: 2
      }, { 
        withCredentials: true 
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      ホームです
      <button onClick={startAutoMatching}>オートマッチング</button>
      <button onClick={startCustomMatch}>カスタムマッチ</button>
      <button onClick={testButton}>機能テストボタン</button>
    </div>
  );
};

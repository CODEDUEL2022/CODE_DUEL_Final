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
    let user_id = 0;
    let user_name = "";
    axios
      .get('http://localhost:3000/api/user/create_user', { withCredentials: true })
      .then((res) => {
        //既にアカウント作成済みの場合
        if (res.data == "already exists"){
          axios.get('http://localhost:3000/api/user/login', { withCredentials: true })
          .then((res) => {
            user_id = res.data[0] //userのid情報
            user_name = res.data[1] //userの名前情報
          })
        }
        user_id = res.data[0] //userのid情報
        user_name = res.data[1] //userの名前情報
      })
      .catch((err) => console.log(err));
    const user = {
      id: user_id,
      name: user_name,
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
      <button onClick={startAutoMatching}>オートマッチング</button>
      <button onClick={startCustomMatch}>カスタムマッチ</button>
    </div>
  );
};

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
        if (res.data == "already exists"){
          axios.get('http://localhost:3000/api/user/login', { withCredentials: true })
          .then((res) => {
            console.log(res.data)
            user_id = res.data[0] //COMMENT: userのid情報
            user_name = res.data[1] //COMMENT: userの名前情報
          })
        }
        user_id = res.data[0] //COMMENT: userのid情報
        user_name = res.data[1] //COMMENT: userの名前情報
        console.log("情報取得完了")
        /*
        COMMENT: ゆってぃーへの無茶ぶり
        この"情報取得完了"が出るまで、バックが処理をしているんだよね
        このログが出るまでの間、ローディング画面的なもの作ることってできる？
        */
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

  const testButton = () => {
    //COMMENT: 機能テスト用関数
    axios
      .post('http://localhost:3000/api/match/after/send_result',{
        result: 1
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

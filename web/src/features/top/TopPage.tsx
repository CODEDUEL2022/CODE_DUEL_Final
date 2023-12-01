import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../libs/store/PlayerContext';
import axios from 'axios';
import { PlayerInformation } from './PlayerInformation';
import { PlayButtons } from './PlayButtons';
import { DeckSelect } from './DeckSelect';

export const TopPage = () => {
  const { setUserInfo } = useContext(UserContext);

  // ログインしているユーザーの情報を取得
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/user/user_login', { withCredentials: true })
        .then((res) => {
          setUserInfo({
            id: res.data.id,
            name: res.data.name,
          });
        })
      .catch((err) => console.log(err));
  }, [setUserInfo]);

  return (
    <>
    <div className='container'>
      <DeckSelect />
      <div className='side-menu'>
        <PlayerInformation />
        <PlayButtons />
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        gap: 24px;
        padding: 8px 16px;
        height: calc(100vh - 16px);
      }
      .side-menu {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 200px;
        @media (max-width: 900px) {
          width: 140px;
        }
      }
    `}</style>
    </>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import Socket from '../../libs/socket/Socket';

import { CardType } from '../../libs/types/Card';
import { PlayerType } from '../../libs/types/Player';

import { UserContext } from '../../libs/store/PlayerContext';
import { GameIdContext } from '../../libs/store/PlayerContext';

import { ModalHeaders } from './templates/ModalHeaders';
import { PlayerStatus } from './templates/PlayerStatus/PlayerStatus';
import { MainButton } from '../../components/parts/Button/MainButton';
import { FieldInfo } from './parts/FieldInfo/FieldInfo';
import { ComboProviders } from './providers/ComboProviders';
import { Animation } from './parts/Animation/Animation';

export const PlayPage = () => {
  const { userInfo } = useContext(UserContext);
  const { gameId } = useContext(GameIdContext);

  // TODO: バックから取得する
  const sampleCards: Array<CardType> = [
    {
      id: 1,
      name: 'Flutter',
      cost: 2,
      enforce_os_id: 1,
      img_src: '/Flutter.png',
      is_selected: false,
      value: 20,
      action_type: 'attack',
    },
    {
      id: 2,
      name: 'Go',
      cost: 2,
      enforce_os_id: 1,
      img_src: '/Go.png',
      is_selected: false,
      value: 20,
      action_type: 'attack',
    },
    {
      id: 3,
      name: 'Next.js',
      cost: 2,
      enforce_os_id: 1,
      img_src: '/next-js.png',
      is_selected: false,
      value: 20,
      action_type: 'attack',
    },
    {
      id: 4,
      name: 'Socket.io',
      cost: 2,
      enforce_os_id: 1,
      img_src: '/socket-io.png',
      is_selected: false,
      value: 20,
      action_type: 'attack',
    },
    {
      id: 5,
      name: 'Swift',
      cost: 2,
      enforce_os_id: 1,
      img_src: '/swift.png',
      is_selected: false,
      value: 20,
      action_type: 'attack',
    },
    {
      id: 6,
      name: 'TypeScript',
      cost: 2,
      enforce_os_id: 1,
      img_src: '/TypeScript.png',
      is_selected: false,
      value: 20,
      action_type: 'attack',
    },
  ];
  // selectedCardsIdに対してuseEffectしてcomboAPI叩く。返ってきた値のモック。
  const sampleCombo = [
    {
      id: 1,
      name: 'hoge',
      combo: [1, 2, 3],
      names: ['vue', 'react', 'angular'],
      value: 60,
      action_type: 'attack',
      enforce_os_id: 3,
      cost: 4,
    },
    {
      id: 2,
      name: 'huga',
      combo: [1, 3],
      names: ['vue', 'react'],
      value: 60,
      action_type: 'attack',
      enforce_os_id: 3,
      cost: 4,
    },
    {
      id: 3,
      name: 'piyo',
      combo: [1, 4],
      names: ['vue', 'react'],
      value: 60,
      action_type: 'attack',
      enforce_os_id: 3,
      cost: 4,
    },
    {
      id: 4,
      name: 'humu',
      combo: [1, 4, 8],
      names: ['vue', 'react', 'angular'],
      value: 60,
      action_type: 'attack',
      enforce_os_id: 3,
      cost: 4,
    },
  ];
  const [playersData, setPlayersData] = useState<{ [key: string]: PlayerType }>({
    myData: {
      id: userInfo?.id,
      name: userInfo?.name,
      hp: 200,
      sp: 5,
      turn: false,
      game_id: gameId,
    },
    opponentsData: {
      id: 0,
      name: 'nakamura',
      hp: 200,
      sp: 5,
      turn: false,
      game_id: gameId,
    },
  });

  const [myCards, setMyCards] = useState<Array<CardType>>(sampleCards);
  const [roundCount, setRoundCount] = useState<number>(0);

  const selectCard = function (id: number) {
    judgeIsAbleSend();
    const updatedMyCards = myCards.map((card) => {
      if (card.id === id) {
        card.is_selected = !card.is_selected;
        return card;
      }
      return card;
    });
    setMyCards(updatedMyCards);
  };

  const judgeIsAbleSend = function () {
    if (!playersData['myData'].turn) return false;
    const selectedCardsIds = myCards
      .filter((card) => card.is_selected === true)
      .map((card) => card.id);

    if (selectedCardsIds.length === 0) return false;
    if (selectedCardsIds.length === 1) return true;

    const tmpCombos = sampleCombo.map((combo) => combo.combo);
    const result = tmpCombos.some((combo) => {
      return (
        combo.length === selectedCardsIds.length &&
        combo.every((value, index) => value === selectedCardsIds[index])
      );
    });

    return result;
  };

  // 入室情報をうけとる
  useEffect(() => {
    const player = {
      id: userInfo?.id,
      name: userInfo?.name,
      hp: 200,
      sp: 5,
      turn: false,
      game_id: gameId,
    };
    Socket.readyGameStart(player);
  }, []);

  Socket.gameStart((round, user1, user2) => {
    setRoundCount(round);
    // socketから送られてきたplayersの情報をセット。
    if (userInfo?.id === user1.id) {
      setPlayersData((players) => ({ ...players, myData: user1, opponentsData: user2 }));
    }
    if (userInfo?.id === user2.id) {
      setPlayersData((players) => ({ ...players, myData: user2, opponentsData: user1 }));
    }
  });

  const handleSendCards = () => {
    if (!judgeIsAbleSend()) return;

    const selectedCards = myCards.filter((card) => card.is_selected === true).map((card) => card);
    const tmpIds = selectedCards.map((card) => card.id);
    setMyCards(myCards.filter((card) => !tmpIds.includes(card.id)));

    if (selectedCards.length === 1)
      return Socket.sendCards(null, selectedCards, playersData, gameId);

    const selectedCardsIds = tmpIds.sort((a, b) => a - b); // 降順に並び替え

    const filteredCombos = sampleCombo.filter((combo) => {
      return (
        combo.combo.length === selectedCardsIds.length &&
        combo.combo.every((id) => selectedCardsIds.includes(id))
      );
    });
    const selectedCombo = filteredCombos[0];

    Socket.sendCards(selectedCombo, selectedCards, playersData, gameId);
  };

  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  // 攻撃情報を受け取る
  useEffect(() => {
    // socket.onを受け取るときの参考:https://tomiko0404.hatenablog.com/entry/2021/11/04/useState-rendering-problem
    Socket.updateField((round, combo, cardsData, updatedPlayersData) => {
      setRoundCount(round);

      console.log(combo);
      console.log(cardsData);

      setIsAnimation(true);

      setTimeout(() => {
        setIsAnimation(false);
        if (updatedPlayersData[0].id === userInfo?.id) {
          return setPlayersData((players) => ({
            ...players,
            myData: updatedPlayersData[0],
            opponentsData: updatedPlayersData[1],
          }));
        }

        setPlayersData((players) => ({
          ...players,
          myData: updatedPlayersData[1],
          opponentsData: updatedPlayersData[0],
        }));
      }, 2000);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <Animation isShow={isAnimation}></Animation>
          <div className="left">
            <FieldInfo round={roundCount}></FieldInfo>
            <div>
              <div className="my-info">
                <PlayerStatus playerData={playersData.myData} color="#FAFF00"></PlayerStatus>
              </div>
              <ModalHeaders></ModalHeaders>
            </div>
          </div>
          <div className="center">
            <ComboProviders
              handleClick={selectCard}
              cards={myCards}
              combos={sampleCombo}
            ></ComboProviders>
          </div>
          <div className="right">
            <PlayerStatus playerData={playersData.opponentsData} color="#FF9900"></PlayerStatus>
            <MainButton handleClick={handleSendCards} able={judgeIsAbleSend()}>
              <div className="inner-button">Go</div>
            </MainButton>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(180deg, rgb(2, 5, 8, 100%), rgb(20, 79, 97, 100%));
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .main {
          display: flex;
          justify-content: center;
          padding: 24px;
          height: calc(100vh - 48px);
          max-width: 1400px;
          max-height: 800px;
        }
        .left {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
        .my-info {
          margin-bottom: 4px;
        }
        .center {
          width: 60%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        .right {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: end;
          justify-content: space-between;
        }

        .inner-button {
          width: 3em;
          height: 1.5em;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: none;
        }

        @media screen and (min-width: 900px) {
          .main {
            padding: 36px;
            height: calc(100vh - 72px);
          }
          .my-info {
            margin-bottom: 16px;
          }
          .inner-button {
            font-size: 40px;
          }
        }

        @media screen and (min-width: 1400px) {
          .main {
            padding: 48px;
            height: calc(100vh - 96px);
          }

          .my-info {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </>
  );
};

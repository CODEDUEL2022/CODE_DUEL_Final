import React, { useContext, useEffect, useState } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { CardType } from '../../libs/types/Card';
import { PlayerType } from '../../libs/types/Player';
import Socket from '../../libs/socket/Socket';
import { UserContext } from '../../libs/store/PlayerContext';
import { GameIdContext } from '../../libs/store/PlayerContext';
import { ModalHeaders } from './templates/ModalHeaders';
import { PlayerStatus } from './templates/PlayerStatus/PlayerStatus';
import { MainButton } from '../../components/parts/Button/MainButton';
import { CardContainers } from './providers/CardContainers';
import { FieldInfo } from './parts/FieldInfo/FieldInfo';
import { Card } from '../../components/parts/Card/Card';
import { FieldCards } from './templates/FieldCards';
import { ComboProviders } from './providers/ComboProviders';
import { ComboType } from '../../libs/types/Combo';

export const PlayPage = () => {
  const { userInfo } = useContext(UserContext);
  const { gameId } = useContext(GameIdContext);

  // TODO: バックから取得する
  const sampleCards: Array<CardType> = [
    {
      id: 1,
      name: 'vue',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1675672552/f2eed80acb50dc3f95c9593c66bce403.svg',
      isSelected: false,
    },
    {
      id: 2,
      name: 'React',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1675672358/3cad3493e6b4c87c94b5610260a07e63.png',
      isSelected: false,
    },
    {
      id: 3,
      name: 'React',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1675672552/f2eed80acb50dc3f95c9593c66bce403.svg',
      isSelected: false,
    },
    {
      id: 4,
      name: 'React',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1675672552/f2eed80acb50dc3f95c9593c66bce403.svg',
      isSelected: false,
    },
    {
      id: 5,
      name: 'React',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1675672552/f2eed80acb50dc3f95c9593c66bce403.svg',
      isSelected: false,
    },
  ];

  const [myCards, setMyCards] = useState<Array<CardType>>(sampleCards);

  const [selectedCardsId, setSelectedCardsId] = useState<number[]>([]);
  const selectCard = function (id: number) {
    judgeIsAbleSend();
    const updatedMyCards = myCards.map((card) => {
      if (card.id === id) {
        card.isSelected = !card.isSelected;
        return card;
      }
      return card;
    });
    setMyCards(updatedMyCards);
  };

  // selectedCardsIdに対してuseEffectしてcomboAPI叩く。返ってきた値のモック。
  const sampleCombo = [
    {
      name: 'hoge',
      combo: [1, 2, 3],
    },
    {
      name: 'huga',
      combo: [1, 3],
    },
    {
      name: 'piyo',
      combo: [1, 4],
    },
    {
      name: 'humu',
      combo: [1, 4, 8],
    },
  ];

  const [containers, setContainers] = useState<{ [key: string]: Array<CardType> }>({
    fieldCards: [],
    myCards: sampleCards,
  });

  const [playersData, setPlayersData] = useState<{ [key: string]: PlayerType }>({
    myData: {
      id: userInfo?.id,
      name: userInfo?.name,
      hp: 200,
      turn: false,
      game_id: gameId,
    },
    opponentsData: {
      id: 0,
      name: 'nakamura',
      hp: 200,
      turn: false,
      game_id: gameId,
    },
  });

  // 入室情報をうけとる
  useEffect(() => {
    const player = {
      id: userInfo?.id,
      name: userInfo?.name,
      hp: 200,
      turn: false,
      game_id: gameId,
    };
    Socket.readyGameStart(player);
    console.log('enter room');
  }, []);

  Socket.gameStart((user1, user2) => {
    // user1_idを先行にする、playersの情報をセット。
    if (userInfo?.id === user1.id) {
      setPlayersData((players) => ({
        ...players,
        myData: {
          ...players.myData,
          turn: true,
        },
        opponentsData: {
          ...players.opponentsData,
          id: user2.id,
          name: user2.name,
        },
      }));
    }
    if (userInfo?.id === user2.id) {
      setPlayersData((players) => ({
        ...players,
        opponentsData: {
          ...players.opponentsData,
          id: user1.id,
          name: user1.name,
        },
      }));
    }
  });

  // 発動ボタンを押せるかどうかの判定
  const judgeIsAbleSend = function () {
    const selectedCardsIds = myCards
      .filter((card) => card.isSelected === true)
      .map((card) => card.id);

    if (selectedCardsIds.length === 0) return false;
    if (selectedCardsIds.length === 1) return true;

    // someをfindに変えればコンボ情報が得られる
    // けど、こいつは配列だけが返ってくる。
    const tmpCombos = sampleCombo.map((combo) => combo.combo);
    const result = tmpCombos.some((combo) => {
      return (
        combo.length === selectedCardsIds.length &&
        combo.every((value, index) => value === selectedCardsIds[index])
      );
    });

    return result;
  };

  const handleSendCards = () => {
    if (!playersData['myData'].turn) return console.log('お前のターンじゃないぞ！！');
    // TODO: コンボから例外処理を書く。本来は発動可能なコンボを取得する。
    if (selectedCardsId.length === 0) return console.log('何も出されていないぞ!');
    if (sampleCombo.length === 0) return console.log('そんなコンボはないぞ');
    console.log('発動!!');

    // カードが一枚の時、idからcardsを参照して出す

    // カードが複数枚のとき、コンボを参照して出す。
    // ここ難しいね。
    // いやでも選択できている時点で大丈夫なのか。
    // そんなことはない。発動できるかどうかはまた別。

    // TODO: コンボを発動するようにする。
    Socket.sendCards(containers['fieldCards'], playersData, gameId);
  };

  // 攻撃情報を受け取る
  useEffect(() => {
    // 参考:https://tomiko0404.hatenablog.com/entry/2021/11/04/useState-rendering-problem
    Socket.updateField((cardsData, updatedPlayersData) => {
      console.dir(cardsData);
      console.dir(updatedPlayersData);

      setPlayersData(() =>
        updatedPlayersData.reduce((acc: { [key: string]: PlayerType }, player) => {
          if (player.id === userInfo?.id) {
            acc['myData'] = player;
          } else {
            acc['opponentsData'] = player;
          }
          return acc;
        }, {})
      );
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <FieldInfo></FieldInfo>
          <div>
            <PlayerStatus playerData={playersData.myData} color="#FAFF00"></PlayerStatus>
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
          <PlayerStatus playerData={playersData.myData} color="#FF9900"></PlayerStatus>
          <MainButton handleClick={handleSendCards} able={judgeIsAbleSend()}>
            <div className="inner-button">Go</div>
          </MainButton>
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          background: linear-gradient(180deg, rgb(2, 5, 8, 100%), rgb(20, 79, 97, 100%));
          justify-content: center;
          padding: 24px;
          height: calc(100vh - 48px);
        }
        .left {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
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
      `}</style>
    </>
  );
};

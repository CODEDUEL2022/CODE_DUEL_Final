import React, { useContext, useEffect, useState, useCallback } from 'react';
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
import { produce } from 'immer';
// TODO：バックから受け取る
import { sampleCards } from 'libs/mocks/cards';
import { sampleCombos } from 'libs/mocks/combos';

export const PlayPage = () => {
  const { userInfo } = useContext(UserContext);
  const { gameId } = useContext(GameIdContext);

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

  const selectCard = useCallback(function (id: number) {
    judgeIsAbleSend();
    const updatedMyCards = myCards.map((card) => {
      if (card.id === id) {
        card.is_selected = !card.is_selected;
        return card;
      }
      return card;
    });
    setMyCards(updatedMyCards);
  }, []);

  const judgeIsAbleSend = function () {
    if (!playersData['myData'].turn) return false;
    const selectedCardsIds = myCards
      .filter((card) => card.is_selected === true)
      .map((card) => card.id);

    if (selectedCardsIds.length === 0) return false;
    if (selectedCardsIds.length === 1) return true;

    const tmpCombos = sampleCombos.map((combo) => combo.combo);
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
      setPlayersData(
        produce((draft) => {
          draft.myData = user1;
          draft.opponentsData = user2;
        })
      );
    }
    if (userInfo?.id === user2.id) {
      setPlayersData(
        produce((draft) => {
          draft.myData = user2;
          draft.opponentsData = user1;
        })
      );
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

    const filteredCombos = sampleCombos.filter((combo) => {
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
          return setPlayersData(
            produce((draft) => {
              draft.myData = updatedPlayersData[0];
              draft.opponentsData = updatedPlayersData[1];
            })
          );
        }

        setPlayersData(
          produce((draft) => {
            draft.myData = updatedPlayersData[1];
            draft.opponentsData = updatedPlayersData[0];
          })
        );
      }, 2000);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <Animation isShow={isAnimation} />
          <div className="left">
            <FieldInfo round={roundCount} />
            <div>
              <div className="my-info">
                <PlayerStatus playerData={playersData.myData} color="#FAFF00"></PlayerStatus>
              </div>
              <ModalHeaders />
            </div>
          </div>
          <div className="center">
            <ComboProviders handleClick={selectCard} cards={myCards} combos={sampleCombos} />
          </div>
          <div className="right">
            <PlayerStatus playerData={playersData.opponentsData} color="#FF9900" />
            <MainButton handleClick={handleSendCards} able={judgeIsAbleSend()}>
              <div className="inner-button">Go</div>
            </MainButton>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .main {
          display: flex;
          justify-content: center;
          padding: 12px;
          height: calc(100vh - 24px);
          max-width: 1400px;
          max-height: 800px;
        }
        .left {
          width: 15%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
        .my-info {
          margin-bottom: 4px;
        }
        .center {
          width: 70%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        .right {
          width: 15%;
          display: flex;
          flex-direction: column;
          align-items: end;
          justify-content: space-between;
        }

        .inner-button {
          width: 3em;
          height: 1.5em;
          font-size: 20px;
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

        @media screen and (min-width: 1350px) {
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

import {PlayButtonsPresentation} from './PlayButtonsPresentation';
import Socket from 'libs/socket/Socket';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GameIdContext } from 'libs/store/PlayerContext';

export const PlayButtons = () => {
  const { setGameId } = useContext(GameIdContext);
  const router = useRouter();

  const startRandomMatching = () => {
    Socket.setupSocketConnection();
    router.push('/waiting/');
  };

  const startCustomMatch = () => {
    const game_id = 'mockRoom';
    setGameId(game_id);
    Socket.setupSocketConnection();
    router.push('/play');
  };

  const startCpuMatch = () => {
    router.push('/play');
  }


  return (
    <>
    <PlayButtonsPresentation
      handleRandomMatch={startRandomMatching}
      handleCustomMatch={startCustomMatch}
      handleCpuMatch={startCpuMatch}
    />
    </>
  );
}

// 参考:https://qiita.com/kamenaris/items/8bcb407007501326bd9d
import { AppProps } from 'next/app';
import { PlayerProvider } from '../libs/store/PlayerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlayerProvider>
        <Component {...pageProps}></Component>
      </PlayerProvider>
    </>
  );
}

export default MyApp;

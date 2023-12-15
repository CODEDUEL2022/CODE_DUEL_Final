// 参考:https://qiita.com/kamenaris/items/8bcb407007501326bd9d
import { AppProps } from 'next/app';
import { PlayerProvider } from '../libs/store/PlayerContext';
import { MediaQueryProvider } from '../libs/store/MediaQuery';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MediaQueryProvider>
        <PlayerProvider>
          <Component {...pageProps}></Component>
        </PlayerProvider>
      </MediaQueryProvider>
    </>
  );
}

export default MyApp;

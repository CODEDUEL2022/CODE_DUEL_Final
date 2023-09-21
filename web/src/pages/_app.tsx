// 参考:https://qiita.com/kamenaris/items/8bcb407007501326bd9d
import { AppProps } from 'next/app';
import { PlayerProvider } from '../libs/store/PlayerContext';
import { MediaQueryProvider } from '../libs/store/MediaQuery';
import { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // マトリックスみたいなコードシェーダーを降らす 参考:https://on-ze.com/archives/6987
    const canvas: any = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [] as number[];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = function () {
      // 背景の設定
      canvasContext.fillStyle = 'rgb(3, 40, 56, 30%)';
      canvasContext.fillRect(0, 0, 600, 400);
      // テキストの設定
      canvasContext.fillStyle = '#189589';
      canvasContext.font = fontSize + 'px arial';

      for (let i = 0; i < columns; i++) {
        let text = matrix[Math.floor(Math.random() * matrix.length)];
        canvasContext.fillText(text, i * fontSize /* x座標 */, drops[i] * fontSize /* y座標 */);
        /*
        ランダムなタイミングで文字を落下させるコード
        文字が一番下までいった場合に、2.5%の確率で文字を降らせている。
        dropsは画面には表示されていないがずっと下まで降っており、確率を満たした場合にリセットされる。
         */
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // setintervalで定期的にdraw()が実行され、文字の塗りつぶし、描画がされる
    const interval = setInterval(draw, 52);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MediaQueryProvider>
        <PlayerProvider>
          <canvas ref={canvasRef} className="canvas" />
          <div className="container">
            <Component {...pageProps} />
          </div>
        </PlayerProvider>
      </MediaQueryProvider>
      <style jsx>
        {`
          .canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
          }
          .container {
            position: relative;
            height: 100svh;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;

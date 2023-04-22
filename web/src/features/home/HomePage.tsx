import React, { useState, useEffect, useRef } from 'react';

export const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // マトリックスみたいなコードシェーダーを降らす 参考:https://on-ze.com/archives/6987
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 600;

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%'.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = function () {
      // 背景の設定
      canvasContext.fillStyle = 'rgb(3, 40, 56, 15%)';
      canvasContext.fillRect(0, 0, 1000, 600);
      // テキストの設定
      canvasContext.fillStyle = '#48e148';
      canvasContext.font = fontSize + 'px arial';

      for (let i = 0; i < columns; i++) {
        let text = matrix[Math.floor(Math.random() * matrix.length)];
        canvasContext.fillText(text, i * fontSize /* x座標 */, drops[i] * fontSize /* y座標 */);
        /*
        ランダムなタイミングで文字を落下させるコード
        文字が一番下までいった場合に、2.5%の確率で文字を降らせている。
        dropsは画面には表示されていないがずっと下まで降っており、確率を満たした場合にリセットされる。
         */
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // setintervalで定期的にdraw()が実行され、文字の塗りつぶし、描画がされる
    const interval = setInterval(draw, 48);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="canvas" />
      <div className="container">
        <div className="titles">
          <div className="subtitle">programming card battle</div>
          <div className="title">CODE DUEL</div>
        </div>
        <div className="auth">
          <a href="http://localhost:3000/auth/google" className="signin">
            &gt; TAP to PLAY
          </a>
        </div>
      </div>
      <style jsx>{`
        .canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        }
        .container {
          position: relative;
          height: 100svh;
          width: 100%;
          z-index: 100;
          .titles {
            background: linear-gradient(180deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.1));
            text-align: center;
            height: 50%;
            .subtitle {
              color: #fff;
              font-size: 1.5cqw;
              font-weight: 100;
              letter-spacing: 0.1cqw;
              font-family: Gill Sans, sans-serif;
              padding-top: 8%;
              padding-bottom: 4%;
              text-shadow: 0 0 5px #d3fffd;
            }
            .title {
              color: #fff;
              font-size: 5cqw;
              letter-spacing: 1cqw;
              font-weight: 100;
              font-family: Gill Sans, sans-serif;
              text-shadow: 0 0 10px #d3fffd;
            }
          }
          .auth {
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .signin {
              color: #fff;
              font-size: 2.5cqw;
              letter-spacing: 0.3cqw;
              text-decoration: none;
              font-weight: 100;
              font-family: Gill Sans, sans-serif;
              text-shadow: 0 0 5px #d3fffd;
              transition: all 0.4s;
            }
            .signin:hover {
              text-shadow: 0 0 20px #d3fffd;
            }
          }
        }
      `}</style>
    </>
  );
};

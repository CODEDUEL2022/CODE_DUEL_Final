import React, { useState, useEffect, useRef } from 'react';

export const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;
    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%'.split('');

    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      canvasContext.fillStyle = 'rgba(0, 0, 0, 0.04)';
      canvasContext.fillRect(0, 0, 1000, 1000);
      canvasContext.fillStyle = '#0F0';
      canvasContext.font = fontSize + 'px arial';

      for (let i = 0; i < columns; i++) {
        let text = matrix[Math.floor(Math.random() * matrix.length)];
        canvasContext.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
        <canvas ref={canvasRef} />
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(180deg, rgb(2, 5, 8, 100%), rgb(20, 79, 97, 100%));
          height: 100svh;
          width: 100%;
          .titles {
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

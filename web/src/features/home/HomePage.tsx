import React from 'react';

export const HomePage = () => {
  return (
    <>
      <div className="titles">
        <div className="subtitle">programming card battle</div>
        <div className="title">CODE DUEL</div>
      </div>
      <div className="auth">
        <a href="http://localhost:3000/auth/google" className="signin">
          &gt; TAP to PLAY
        </a>
      </div>
      <style jsx>{`
        .titles {
          background: linear-gradient(180deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.1));
          text-align: center;
          height: 50%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-evenly;
          .subtitle {
            color: #fff;
            font-size: 1.8cqw;
            font-weight: 100;
            letter-spacing: 0.2cqw;
            font-family: Gill Sans, sans-serif;
            text-shadow: 0 0 5px #d3fffd;
            transform: scale(0.9, 1);
          }
          .title {
            color: #fff;
            font-size: 5.5cqw;
            letter-spacing: 0.9cqw;
            font-weight: 100;
            font-family: Gill Sans, sans-serif;
            text-shadow: 0 0 10px #d3fffd;
            transform: scale(0.9, 1);
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
            letter-spacing: 0.4cqw;
            text-decoration: none;
            font-weight: 100;
            font-family: Gill Sans, sans-serif;
            text-shadow: 0 0 5px #d3fffd;
            transition: all 0.4s;
            transform: scale(0.9, 1);
          }
          .signin:hover {
            text-shadow: 0 0 20px #d3fffd;
          }
        }
      `}</style>
    </>
  );
};

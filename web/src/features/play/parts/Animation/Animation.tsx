import React from 'react';

interface AnimationProps {
  isShow: boolean;
}

export const Animation: React.FC<AnimationProps> = (props) => {
  const { isShow } = props;

  return (
    <>
      {isShow ? (
        <div className="overlay">
          <div className="content">攻撃!</div>
        </div>
      ) : (
        <></>
      )}
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 100;
        }

        .content {
          color: #fff;
        }
      `}</style>
    </>
  );
};

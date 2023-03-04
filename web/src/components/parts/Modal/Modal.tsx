import React from 'react';
import { ArwesThemeProvider, FrameCorners } from '@arwes/core';

interface ModalProps {
  isModalOpen: Boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const themeSettings = {
  palette: {
    primary: { main: '#00fff2' },
  },
  space: 6,
  shadow: { blur: 4 },
};

export const Modal: React.FC<ModalProps> = (props) => {
  const { isModalOpen, children, onClick } = props;
  if (isModalOpen === false) return null;

  return (
    <>
      <div className="overlay" onClick={onClick}>
        {/* @ts-ignore */}
        <ArwesThemeProvider themeSettings={themeSettings}>
          {/* @ts-ignore */}
          <FrameCorners style={{ width: '80%', maxHeight: '80vh' }} cornerLength={40}>
            <span className="closeButton" onClick={onClick}>
              &times;
            </span>
            <div className="modalContainer">{children}</div>
          </FrameCorners>
        </ArwesThemeProvider>
      </div>
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
        .closeButton {
          display: block;
          padding-right: 6px;
          cursor: pointer;
          text-align: right;
          z-index: 10;
          color: #fff;
        }

        .modalContainer {
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

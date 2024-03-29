import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

const MediaQueryContext = React.createContext({
  isMiniPhone: false,
  isSmartPhone: false,
  isLaptopOrTablet: false,
  isBigScreen: false,
});

export const MediaQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMiniPhone = useMediaQuery({ query: '(max-width: 760px)' });
  const isSmartPhone = useMediaQuery({ query: '(max-width: 900px)' });
  const isLaptopOrTablet = useMediaQuery({ query: '(max-width: 1350px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1350px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      <MediaQueryContext.Provider
        value={{ isMiniPhone, isSmartPhone, isLaptopOrTablet, isBigScreen }}
      >
        {children}
      </MediaQueryContext.Provider>
      {isPortrait ? <div className="caution">横向きでプレイしてください</div> : null}
      <style jsx>{`
        .caution {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: #fff;
          z-index: 100;
        }
      `}</style>
    </>
  );
};

export const useDeviceType = () => useContext(MediaQueryContext);

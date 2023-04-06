import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

const MediaQueryContext = React.createContext({
  isSmartPhone: false,
  isLaptopOrTablet: false,
  isBigScreen: false,
  isPortrait: false,
});

export const MediaQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isSmartPhone = useMediaQuery({ query: '(max-width: 900px)' });
  const isLaptopOrTablet = useMediaQuery({ query: '(max-width: 1400px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <MediaQueryContext.Provider value={{ isSmartPhone, isLaptopOrTablet, isBigScreen, isPortrait }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useDeviceType = () => useContext(MediaQueryContext);

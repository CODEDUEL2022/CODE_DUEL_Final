import React from 'react';
import { ArwesThemeProvider, LoadingBars } from '@arwes/core';
import { useDeviceType } from 'libs/store/MediaQuery';
interface HPBarProps {
  hp: number;
  color: string;
}

export const HPBar: React.FC<HPBarProps> = (props) => {
  const { hp, color } = props;
  const { isSmartPhone, isLaptopOrTablet, isBigScreen } = useDeviceType();

  const themeSettings = {
    palette: {
      primary: { main: color },
    },
    space: 6,
    shadow: { blur: 4 },
  };

  const maxHp = 200;
  const hpPercentage = (hp / maxHp) * 100;

  return (
    <>
      {/* @ts-ignore */}
      <ArwesThemeProvider themeSettings={themeSettings}>
        <LoadingBars
          animator={{ animate: false }}
          progress={hpPercentage}
          determinate
          size={isSmartPhone ? 0.8 : isLaptopOrTablet ? 1.2 : isBigScreen ? 1.4 : 1}
        ></LoadingBars>
      </ArwesThemeProvider>
    </>
  );
};

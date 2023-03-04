import React from 'react';
import { ArwesThemeProvider, LoadingBars } from '@arwes/core';
interface HPBarProps {
  hp: number;
  color: string;
}

export const HPBar: React.FC<HPBarProps> = (props) => {
  const { hp, color } = props;

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
        ></LoadingBars>
      </ArwesThemeProvider>
    </>
  );
};

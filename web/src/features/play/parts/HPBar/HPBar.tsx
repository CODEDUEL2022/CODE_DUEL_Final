import React from 'react';
import { ArwesThemeProvider, LoadingBars } from '@arwes/core';
import { StylesBaseline } from '@arwes/core';

let themeSettings = {};

const palette = {
  primary: { main: '#fff' },
};
themeSettings = { palette };

interface HPBarProps {
  HP: number;
}

export const HPBar: React.FC<HPBarProps> = (props) => {
  const { HP } = props;

  const maxHP = 200;
  const HPPercentage = (HP / maxHP) * 100;

  return (
    <ArwesThemeProvider themeSettings={themeSettings}>
      <StylesBaseline
        styles={{
          'html, body': { color: '#fff' },
          'code, pre': { color: '#fff' },
        }}
      ></StylesBaseline>
      <LoadingBars animator={{ animate: false }} progress={HPPercentage} determinate></LoadingBars>
    </ArwesThemeProvider>
  );
};

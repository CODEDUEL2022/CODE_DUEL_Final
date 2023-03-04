import React from 'react';
import { LoadingBars } from '@arwes/core';
interface HPBarProps {
  hp: Number;
}

export const HPBar: React.FC<HPBarProps> = (props) => {
  const { hp } = props;

  const maxHp = 200;
  const hpPercentage = (hp / maxHp) * 100;

  return (
    <LoadingBars animator={{ animate: false }} progress={hpPercentage} determinate></LoadingBars>
  );
};

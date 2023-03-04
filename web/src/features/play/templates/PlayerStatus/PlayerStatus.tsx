import React, { memo } from 'react';
import { HPBar } from '../../parts/HPBar/HPBar';
import { ArwesThemeProvider, Text } from '@arwes/core';
import { PlayerType } from '../../../../libs/types/Player';

interface PlayerStatusProps {
  playerData: PlayerType;
  color: string;
}

export const PlayerStatus: React.FC<PlayerStatusProps> = memo((props) => {
  const { playerData, color } = props;

  const themeSettings = {
    palette: {
      primary: { main: color },
    },
    space: 6,
    shadow: { blur: 4 },
  };

  return (
    <div style={{ width: '130px' }}>
      <ArwesThemeProvider themeSettings={themeSettings}>
        <Text
          style={{
            color: color,
            width: '100%',
            fontSize: '20px',
            borderBottom: 'solid 2px',
            borderColor: color,
            marginBottom: '12px',
          }}
        >
          {playerData.name}
        </Text>
        <br />
        <HPBar hp={playerData.hp}></HPBar>
        <br />
        <Text style={{ color: color, fontSize: '16px' }}>HP : {playerData.hp}</Text>
      </ArwesThemeProvider>
    </div>
  );
});

import React from 'react';
import { HPBar } from '../../parts/HPBar/HPBar';
import { Text } from '@arwes/core';
import { PlayerType } from '../../../../libs/types/Player';

interface PlayerStatusProps {
  playerData: PlayerType;
  color: string;
}

export const PlayerStatus: React.FC<PlayerStatusProps> = (props) => {
  const { playerData, color } = props;

  return (
    <div style={{ width: '130px' }}>
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
      <HPBar hp={playerData.hp} color={color}></HPBar>
      <br />
      <Text style={{ color: color, fontSize: '16px' }}>HP : {playerData.hp}</Text>
    </div>
  );
};

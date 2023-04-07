import React from 'react';
import { HPBar } from '../../parts/HPBar/HPBar';
import { Text } from '@arwes/core';
import { PlayerType } from '../../../../libs/types/Player';
import { useDeviceType } from 'libs/store/MediaQuery';

interface PlayerStatusProps {
  playerData: PlayerType;
  color: string;
}

export const PlayerStatus: React.FC<PlayerStatusProps> = (props) => {
  const { playerData, color } = props;
  const { isSmartPhone, isLaptopOrTablet, isBigScreen } = useDeviceType();

  const nameSize = isSmartPhone
    ? '16px'
    : isLaptopOrTablet
    ? '24px'
    : isBigScreen
    ? '28px'
    : '20px';

  const hpSize = isSmartPhone ? '14px' : isLaptopOrTablet ? '20px' : isBigScreen ? '24px' : '16px';

  return (
    <>
      <div className="row-container">
        <div className="column-container">
          {/* @ts-ignore */}
          <Text
            style={{
              color: color,
              width: '100%',
              fontSize: nameSize,
              borderBottom: 'solid 2px',
              borderColor: color,
              marginBottom: '12px',
              paddingBottom: '6px',
            }}
          >
            {playerData.name}
          </Text>
          <HPBar hp={playerData.hp} color={color}></HPBar>
          {/* @ts-ignore */}
          <Text style={{ color: color, fontSize: hpSize, paddingTop: '6px' }}>
            HP : {playerData.hp}
          </Text>
        </div>
      </div>
      <style jsx>{`
        .row-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        .column-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

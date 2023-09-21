import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

interface PlayerInformationProps {
  name: string;
  rate: number;
}

export const PlayerInformation: React.FC<PlayerInformationProps> = ({ name, rate }) => {
  return (
    <>
      <div className="container">
        <div className="name-container">
          <BsFillPersonFill size="12" />
          <span>{name}</span>
        </div>
        <div className="rate-container">
          <span>Rate</span>
          <span>{rate}</span>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: inherit;
        }

        .name-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 2px;
          padding-bottom: 2px;
          border-bottom: solid 1px #00fff2;
          font-size: 10px;
        }

        .rate-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size: 8px;
        }
      `}</style>
    </>
  );
};

import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsFillPeopleFill, BsRobot } from 'react-icons/bs';

type MatchType = 'random_match' | 'custom_match' | 'cpu_match';

interface MatchButtonProps {
  matchType: MatchType;
}

export const MatchButton: React.FC<MatchButtonProps> = ({ matchType }) => {
  return (
    <>
      <button className="button">
        {matchType === 'random_match' ? (
          <>
            <AiOutlineGlobal size={16} />
            <span className="label">Random match</span>
          </>
        ) : matchType === 'custom_match' ? (
          <>
            <BsFillPeopleFill size={16} />
            <span className="label">Custom match</span>
          </>
        ) : (
          <>
            <BsRobot size={16} />
            <span className="label">CPU match</span>
          </>
        )}
      </button>
      <style jsx>
        {`
          .button {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            background-color: #186883;
            color: #fff;
            border: none;
            padding: 4px 8px;
            &:hover {
              background-color: #144f61;
              cursor: pointer;
            }
          }

          .label {
            font-size: 12px;
          }
        `}
      </style>
    </>
  );
};

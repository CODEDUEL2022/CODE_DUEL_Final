import React from 'react';
import { MatchButton } from './children/MatchButton';

interface PlayButtonsProps {
  handleRandomMatch : () => void;
  handleCustomMatch : () => void;
  handleCpuMatch : () => void;
}

export const PlayButtonsPresentation: React.FC<PlayButtonsProps> = (props) => {
  const {handleRandomMatch, handleCustomMatch, handleCpuMatch} = props;

  return (
    <>
      <div className="button-container">
        <MatchButton matchType="random_match" handleClick={handleRandomMatch} />
        <MatchButton matchType="custom_match" handleClick={handleCustomMatch}/>
        <MatchButton matchType="cpu_match" handleClick={handleCpuMatch} />
      </div>
      <style jsx>
        {`
          .button-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

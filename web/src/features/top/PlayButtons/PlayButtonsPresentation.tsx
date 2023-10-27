import React from 'react';
import { MatchButton } from './children/MatchButton';

interface PlayButtonsProps {}

export const PlayButtonsPresentation: React.FC<PlayButtonsProps> = (props) => {
  const {} = props;

  return (
    <>
      <div className="button-container">
        <MatchButton matchType="random_match" />
        <MatchButton matchType="custom_match" />
        <MatchButton matchType="cpu_match" />
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

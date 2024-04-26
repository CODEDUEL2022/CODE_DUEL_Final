'use client';

import React from 'react';
import { MatchButtonsPresentation } from './presentations/';
import { useMatchButtons } from './hooks';

type Props = {};

export const MatchButtons: React.FC<Props> = (props) => {
  const { handleRandomMatch, handleCustomMatch, handleCpuMatch } = useMatchButtons();
  return (
    <MatchButtonsPresentation
      handleRandomMatch={handleRandomMatch}
      handleCustomMatch={handleCustomMatch}
      handleCpuMatch={handleCpuMatch}
    />
  );
};

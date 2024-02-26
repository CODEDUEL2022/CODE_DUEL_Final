'use client';

import React from 'react';
import { TopFormAndLinkPresentation } from './presentations/';
import { useTopFormAndLink } from './hooks';

type Props = {};

export const TopFormAndLink: React.FC<Props> = (props) => {
  const { name, handleChange, error, handleSubmit } = useTopFormAndLink();

  return (
    <TopFormAndLinkPresentation
      value={name}
      handleChange={handleChange}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

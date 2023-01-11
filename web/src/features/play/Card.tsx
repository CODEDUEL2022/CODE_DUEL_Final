import React from 'react';

import { UniqueIdentifier } from '@dnd-kit/core';

interface CardProps {
  id: UniqueIdentifier;
}

export const Card: React.FC<CardProps> = (props) => {
  const { id } = props;

  return <div>{id}</div>;
};

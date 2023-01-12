import React from 'react';

import { UniqueIdentifier } from '@dnd-kit/core';

interface CardProps {
  id: UniqueIdentifier;
}

export const Card: React.FC<CardProps> = (props) => {
  const { id } = props;

  return (
    <div
      style={{
        width: '100px',
        height: '200px',
        backgroundColor: '#fff',
        border: 'solid 1px #000',
      }}
    >
      {id}
    </div>
  );
};

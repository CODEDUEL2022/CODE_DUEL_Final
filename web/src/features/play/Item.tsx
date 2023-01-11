import React from 'react';

import { UniqueIdentifier } from '@dnd-kit/core';

interface ItemProps {
  id: UniqueIdentifier;
}

export const Item: React.FC<ItemProps> = (props) => {
  const { id } = props;

  return (
    <div className="w-full h-[50px] flex items-center justify-center my-2.5 border border-black rounded-lg">
      {id}
    </div>
  );
};

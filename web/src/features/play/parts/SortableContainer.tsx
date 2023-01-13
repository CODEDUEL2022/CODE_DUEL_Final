import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import { SortableCard } from './SortableCard';

interface SortableContainerProps {
  id: string;
  cards: string[];
  style: any;
}

export const SortableContainer: React.FC<SortableContainerProps> = (props) => {
  const { id, cards, style } = props;

  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div style={{ display: 'block' }}>
      <SortableContext
        id={id}
        items={cards}
        strategy={horizontalListSortingStrategy}
      >
        <div ref={setNodeRef} style={style}>
          {cards.map((id: string) => (
            <SortableCard key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { SortableCard } from './SortableCard';

interface SortableContainerProps {
  id: string;
  cards: string[];
  label: string;
}

export const SortableContainer: React.FC<SortableContainerProps> = (props) => {
  const { id, cards, label } = props;

  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div>
      <h3>{label}</h3>
      <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
        <div ref={setNodeRef}>
          {cards.map((id: string) => (
            <SortableCard key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

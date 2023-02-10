import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import { SortableCard } from './SortableCard';
import { CardType } from '../../../libs/types/Card';

interface SortableContainerProps {
  id: string;
  cards: Array<CardType>;
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
          {cards.map((card: CardType) => (
            <SortableCard key={card.id} id={card.id} card={card} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

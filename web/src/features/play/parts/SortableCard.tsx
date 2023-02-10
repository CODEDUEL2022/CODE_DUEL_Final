import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Card } from '../../../components/parts/Card/Card';
import { CardType } from '../../../libs/types/Card';

interface SortableCardProps {
  id: UniqueIdentifier;
  card: CardType;
}

export const SortableCard: React.FC<SortableCardProps> = (props) => {
  const { id, card } = props;

  const aaa = card.id;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }} // 滑らかにカードを動かすためのアニメーション
      {...attributes}
      {...listeners}
    >
      <Card id={id} card={card} />
    </div>
  );
};

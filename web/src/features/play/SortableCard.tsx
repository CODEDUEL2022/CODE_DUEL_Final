import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Card } from './Card';

interface SortableCardProps {
  id: UniqueIdentifier;
}

export const SortableCard: React.FC<SortableCardProps> = (props) => {
  const { id } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        width: '100px',
        height: '100px',
      }} // 滑らかにカードを動かすためのアニメーション
      {...attributes}
      {...listeners}
    >
      <Card id={id} />
    </div>
  );
};

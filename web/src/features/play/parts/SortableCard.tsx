import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '../../../components/parts/Card/Card';
import { CardType } from '../../../libs/types/Card';

interface SortableCardProps {
  card: CardType;
}

export const SortableCard: React.FC<SortableCardProps> = (props) => {
  const { card } = props;
  // dndを可能にするためのhook
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.id });

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
      <Card card={card} />
    </div>
  );
};

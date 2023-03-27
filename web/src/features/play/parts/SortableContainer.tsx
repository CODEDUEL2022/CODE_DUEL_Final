import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { SortableCard } from './SortableCard';
import { CardType } from '../../../libs/types/Card';

interface SortableContainerProps {
  containerId: string;
  cards: Array<CardType>;
  style: any;
}

export const SortableContainer: React.FC<SortableContainerProps> = (props) => {
  const { containerId, cards, style } = props;

  const { setNodeRef } = useDroppable({ id: containerId });
  return (
    <>
      <SortableContext id={containerId} items={cards} strategy={horizontalListSortingStrategy}>
        <div ref={setNodeRef} style={style}>
          {cards.map((card: CardType) => (
            <div className="card">
              <SortableCard key={card.id} card={card} />
            </div>
          ))}
        </div>
      </SortableContext>
      <style jsx>{`
        .card:nth-child(1) {
          transform: rotate(-30deg) translate(40px, 70px);
        }
        .card:nth-child(2) {
          transform: rotate(-15deg) translate(30px, 20px);
        }
        .card:nth-child(3) {
          transform: rotate(0deg);
        }
        .card:nth-child(4) {
          transform: rotate(15deg) translate(-30px, 20px);
        }
        .card:nth-child(5) {
          transform: rotate(30deg) translate(-40px, 70px);
        }
      `}</style>
    </>
  );
};

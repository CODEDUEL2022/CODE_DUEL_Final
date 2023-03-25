import React from 'react';
import { CardType } from '../../../libs/types/Card';
import { Card } from '../../../components/parts/Card/Card';

interface CardProps {
  card: CardType | undefined;
}

export const FieldCard: React.FC<CardProps> = (props) => {
  const { card } = props;

  return (
    <div>
      <Card card={card} />
    </div>
  );
};

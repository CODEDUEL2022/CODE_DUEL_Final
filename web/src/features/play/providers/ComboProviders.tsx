import React from 'react';
import { CardType } from '../../../libs/types/Card';
import { FieldCards } from '../templates/FieldCards';
import { ComboType } from '../../../libs/types/Combo';
import { Terminal } from '../parts/Terminal/Terminal';

interface ComboProvidersProps {
  combos: Array<ComboType>;
  cards: Array<CardType>;
  handleClick: (id: number) => void;
}

export const ComboProviders: React.FC<ComboProvidersProps> = (props) => {
  const { combos, cards, handleClick } = props;

  const cardsId = cards.map((card) => card.id);
  let ableUseCardIds = cardsId;
  let filteredCombos: Array<ComboType>;

  if (combos.length !== 0) {
    // 実際に手持ちで可能なコンボがどれかを取得する関数
    filteredCombos = combos.filter((combo) => combo.combo.every((card) => cardsId.includes(card)));

    // 発動することのできるカードをコンボ情報から取得
    const flatComboIds = filteredCombos.flatMap((combo) => combo.combo);
    const tmp = new Set(flatComboIds);
    ableUseCardIds = Array.from(tmp);
  }

  return (
    <>
      <Terminal combos={combos}></Terminal>
      <FieldCards
        cards={cards}
        handleClick={handleClick}
        ableUseCardIds={ableUseCardIds}
      ></FieldCards>
      <style jsx>{`
        .card-container {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

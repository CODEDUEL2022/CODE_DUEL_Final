import React from 'react';
import { CardType } from '../../../libs/types/Card';
import { FieldCards } from '../templates/FieldCards';
import { ComboType } from '../../../libs/types/Combo';

interface ComboProvidersProps {
  combos: Array<ComboType>;
  cards: Array<CardType>;
  handleClick: (id: number) => void;
}

export const ComboProviders: React.FC<ComboProvidersProps> = (props) => {
  const { combos, cards, handleClick } = props;

  const cardsId = cards.map((card) => card.id);

  // 実際に手持ちで可能なコンボがどれかを取得する関数
  function filterCombo(cardsId: Array<number>, ableCombos: Array<ComboType>) {
    const filteredCombos = ableCombos.filter((combo) =>
      combo.combo.every((card) => cardsId.includes(card))
    );
    return filteredCombos;
  }
  const filteredCombos = filterCombo(cardsId, combos);

  const getComboCardIds = function (ableCombos: Array<ComboType>) {
    const flatCombos = ableCombos.flatMap((combo) => combo.combo);
    const uniqueSet = new Set(flatCombos);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
  };

  const ableUseCardIds = getComboCardIds(filteredCombos);
  console.log(ableUseCardIds);

  return (
    <>
      <div style={{ color: '#fff' }}>{filteredCombos[0].combo}</div>
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

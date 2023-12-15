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

  if (combos.length !== 0) {
    // 実際に手持ちで可能なコンボがどれかを取得する関数
    const filteredCombos = combos.filter((combo) =>
      combo.combo.every((card) => cardsId.includes(card))
    );

    // 選択することのできるカードをコンボ情報から取得
    const flatComboIds = filteredCombos.flatMap((combo) => combo.combo);
    const tmp = new Set(flatComboIds);
    const ableComboIds = Array.from(tmp);
    // 自分が選択しているカードと同じカードを消さないといけない。
    const selectedCardsIds = cards
      .filter((card) => card.is_selected === true)
      .map((card) => card.id);
    ableUseCardIds = ableComboIds.filter((id) => !selectedCardsIds.includes(id));
  }

  return (
    <>
      <Terminal combos={combos}></Terminal>
      <FieldCards
        cards={cards}
        handleClick={handleClick}
        ableUseCardIds={ableUseCardIds}
      ></FieldCards>
    </>
  );
};

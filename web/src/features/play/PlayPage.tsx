import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { SortableContainer } from './SortableContainer';
import { Card } from './Card';

export const PlayPage = () => {
  // カードに書き換える
  const [cards, setCards] = useState<{
    [key: string]: string[];
  }>({
    fieldCards: ['テスト'],
    myCards: ['A', 'B', 'C', 'D', 'E', 'F'],
  });

  //リストのリソースid（リストの値）
  const [activeId, setActiveId] = useState<UniqueIdentifier>();

  // ドラッグの開始、移動、終了などにどのような入力を許可するかを決めるprops
  const sensors = useSensors(
    // マウスだけでなくタッチにも対応する
    useSensor(PointerSensor),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  //各コンテナ取得関数
  const findContainer = (id: UniqueIdentifier) => {
    if (id in cards) {
      return id;
    }
    return Object.keys(cards).find((key: string) =>
      cards[key].includes(id.toString())
    );
  };

  // ドラッグ開始時に発火する関数
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    setActiveId(id);
  };

  //ドラッグ可能なアイテムがドロップ可能なコンテナの上に移動時に発火する関数
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    //ドロップした場所にあったリソースのid
    const overId = over?.id;
    // ドロップした場所が対象外だったら処理を終了
    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    // コンテナを移動しているかの処理
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setCards((beforeDropCards) => {
      // 移動元,移動先のコンテナの要素配列を取得
      const activeCards = beforeDropCards[activeContainer];
      const overCards = beforeDropCards[overContainer];

      // 配列のインデックス取得
      const activeIndex = activeCards.indexOf(id);
      const overIndex = overCards.indexOf(overId.toString());

      // まじでわからん
      let newIndex;
      console.log(beforeDropCards);
      console.log(overId);
      if (overId in beforeDropCards) {
        newIndex = overCards.length + 1;
      } else {
        const isBelowLastCard = over && overIndex === overCards.length - 1;
        const modifier = isBelowLastCard ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overCards.length + 1;
      }

      return {
        ...beforeDropCards,
        [activeContainer]: [
          // 移動元の残ったカード
          ...beforeDropCards[activeContainer].filter(
            (card) => card !== active.id
          ),
        ],
        [overContainer]: [
          // もとのcardの配列に新しいcardが入り込む
          ...beforeDropCards[overContainer].slice(0, newIndex),
          cards[activeContainer][activeIndex],
          ...beforeDropCards[overContainer].slice(
            newIndex,
            beforeDropCards[overContainer].length
          ),
        ],
      };
    });
  };

  // ドラッグ終了時に発火する関数
  const handleDragEnd = (event: DragEndEvent) => {
    // 処理上と同じなのでまとめれそうな部分 ----------------------------------
    const { active, over } = event;
    const id = active.id.toString();
    const overId = over?.id;

    if (!overId) return;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = cards[activeContainer].indexOf(id);
    const overIndex = cards[overContainer].indexOf(overId.toString());
    // ------------------------------------------------------------------------

    if (activeIndex !== overIndex) {
      setCards((cards) => ({
        ...cards,
        [overContainer]: arrayMove(
          cards[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContainer
          id="fieldCards"
          cards={cards.fieldCards}
          label="fieldCards"
        />
        <SortableContainer id="myCards" label="myCards" cards={cards.myCards} />
        <DragOverlay>{activeId ? <Card id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};

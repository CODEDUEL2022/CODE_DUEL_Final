import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
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
import { arrayMove } from '@dnd-kit/sortable';
import { SortableContainer } from './parts/SortableContainer';
import { Card } from '../../components/parts/Card/Card';
import { CardType } from '../../libs/types/Card';

export const PlayPage = () => {
  const sampleCards: Array<CardType> = [
    {
      id: 1,
      name: 'vue',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1674454416/vue_logo.png',
    },
    {
      id: 2,
      name: 'React',
      cost: 2,
      enforce_os_id: 1,
      img_src:
        'https://res.cloudinary.com/du3fnn01g/image/upload/v1674453694/olympic_flag.jpg',
    },
  ];

  const [containers, setContainers] = useState<{
    [key: string]: Array<CardType>;
  }>({
    fieldCards: [],
    myCards: sampleCards,
  });

  //コンテナのkeyまたはcardのid
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
    if (id in containers) return id;
    // コンテナのkeyを取得する
    return Object.keys(containers).find((key: string) => {
      const cardsIdsInContainer = containers[key].map((card) => card.id);
      return cardsIdsInContainer.includes(id);
    });
  };

  // ドラッグ開始時に発火する関数
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    //ドラッグしたリソースのid
    const id = active.id;
    setActiveId(id);
  };

  //ドラッグ可能なアイテムがドロップ可能なコンテナの上に移動時に発火する関数
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id;
    //ドロップした場所にあったリソースのid
    const overId = over?.id;
    // ドロップした場所が対象外だったら処理を終了
    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    // コンテナを移動しているかの処理
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setContainers((beforeDropCards) => {
      // 移動元,移動先のコンテナの要素配列を取得
      const activeCards = beforeDropCards[activeContainer];
      const overCards = beforeDropCards[overContainer];
      console.log(activeCards);
      console.log(overCards);

      const activeCardsIds = activeCards.map((card) => card.id);
      const overCardsIds = overCards.map((card) => card.id);

      // 配列のインデックス取得
      const activeIndex = activeCardsIds.indexOf(id);
      const overIndex = overCardsIds.indexOf(overId);

      // 新しい配列に入ったときのindexを作成
      let newIndex;
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
            (card) => card.id !== active.id
          ),
        ],
        [overContainer]: [
          // もとのcardの配列に新しいcardが入り込む
          ...beforeDropCards[overContainer].slice(0, newIndex),
          containers[activeContainer][activeIndex],
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
    const id = active.id;
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

    const activeCards = containers[activeContainer].map((card) => card.id);
    const overCards = containers[overContainer].map((card) => card.id);

    const activeIndex = activeCards.indexOf(id);
    const overIndex = overCards.indexOf(overId);
    // ------------------------------------------------------------------------

    if (activeIndex !== overIndex) {
      setContainers((containers) => ({
        ...containers,
        [overContainer]: arrayMove(
          containers[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  };

  console.log(activeId);

  const fieldStyle = {
    display: 'flex',
    width: '60%',
    height: '300px',
    backgroundColor: '#144F61',
  };

  const myCardsStyle = {
    display: 'flex',
    width: '80%',
    height: '300px',
    backgroundColor: '#000',
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContainer
          id="fieldCards"
          cards={containers.fieldCards}
          style={fieldStyle}
        />
        <SortableContainer
          id="myCards"
          cards={containers.myCards}
          style={myCardsStyle}
        />
        <DragOverlay>
          {activeId ? (
            <Card
              id={activeId}
              card={{
                id: 2,
                name: 'React',
                cost: 2,
                enforce_os_id: 1,
                img_src:
                  'https://res.cloudinary.com/du3fnn01g/image/upload/v1674453694/olympic_flag.jpg',
              }}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

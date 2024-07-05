import React from 'react';
import styled from './index.module.scss';
import { ModalButton } from '@/commons/ModalButton';
import { BsFile } from 'react-icons/bs';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Cards } from '../../../../api/@types';

type Props = {
  cards: Cards;
};

export const ModalGroupPresentation: React.FC<Props> = ({ cards }) => {
  return (
    <div className={styled.wrapper}>
      <ModalButton icon={BsFile} text="カード一覧" modalLabel="カード一覧">
        <h1>カード一覧</h1>
        <ul className={styled.list}>
          {cards.map((card) => (
            <li key={card.name} className={styled.listItem}>
              <button className={styled.button}>
                <img src={card.image_src} alt={card.name} className={styled.image} />
              </button>
            </li>
          ))}
        </ul>
      </ModalButton>
      <ModalButton
        icon={IoIosInformationCircleOutline}
        text="遊び方"
        modalLabel="CODE_DUELの遊び方"
      >
        <h1>遊び方</h1>
      </ModalButton>
    </div>
  );
};

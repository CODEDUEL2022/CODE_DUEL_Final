import React from 'react';
import { SubButton } from '../../../components/parts/SubButton/SubButton';

interface ModalHeadersProps {}

export const ModalHeaders: React.FC<ModalHeadersProps> = (props) => {
  const {} = props;

  const OpenCardListModal = function () {
    console.log('yey');
  };

  const OpenHowToPlayModal = function () {
    console.log('yeeeeee!!!');
  };

  return (
    <div>
      <SubButton text="カード一覧" onClick={OpenCardListModal}></SubButton>
      <SubButton text="遊び方" onClick={OpenHowToPlayModal}></SubButton>
    </div>
  );
};

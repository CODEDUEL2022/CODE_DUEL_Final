import React from 'react';
import { SubButton } from '../../../components/parts/SubButton/SubButton';
import { FiSettings, FiFile } from 'react-icons/fi';

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
      <SubButton onClick={OpenCardListModal}>
        <FiFile></FiFile>
        <div style={{ paddingLeft: '5px' }}>カード一覧</div>
      </SubButton>
      <SubButton onClick={OpenHowToPlayModal}>
        <FiSettings></FiSettings>
        <div style={{ paddingLeft: '5px' }}>遊び方</div>
      </SubButton>
    </div>
  );
};

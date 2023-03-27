import React, { useState } from 'react';
import { SubButton } from '../../../components/parts/SubButton/SubButton';
import { FiSettings, FiFile } from 'react-icons/fi';
import { Modal } from '../../../components/parts/Modal/Modal';

interface ModalHeadersProps {}

export const ModalHeaders: React.FC<ModalHeadersProps> = (props) => {
  const {} = props;

  const [isOpenCardListModal, setIsOpenCardListModal] = useState<Boolean>(false);
  const [isOpenHowToPlayModal, setIsOpenHowToPlayModal] = useState<Boolean>(false);

  const openCardListModal = function () {
    isOpenCardListModal || setIsOpenCardListModal(true);
  };
  const closeCardListModal = function () {
    isOpenCardListModal && setIsOpenCardListModal(false);
  };

  const openHowToPlayModal = function () {
    isOpenHowToPlayModal || setIsOpenHowToPlayModal(true);
  };
  const closeHowToPlayModal = function () {
    isOpenHowToPlayModal && setIsOpenHowToPlayModal(false);
  };

  return (
    <div>
      <SubButton onClick={openCardListModal}>
        <FiFile></FiFile>
        <div style={{ paddingLeft: '5px' }}>カード一覧</div>
      </SubButton>
      <Modal onClick={closeCardListModal} isModalOpen={isOpenCardListModal}>
        <h1 style={{ color: '#fff' }}>カード一覧です</h1>
      </Modal>
      <SubButton onClick={openHowToPlayModal}>
        <FiSettings></FiSettings>
        <div style={{ paddingLeft: '5px' }}>遊び方</div>
      </SubButton>
      <Modal onClick={closeHowToPlayModal} isModalOpen={isOpenHowToPlayModal}>
        <h1 style={{ color: '#fff' }}>遊び方です</h1>
      </Modal>
    </div>
  );
};

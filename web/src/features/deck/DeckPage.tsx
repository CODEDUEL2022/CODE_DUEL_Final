import React, { useState } from 'react';
import { MainButton } from '../../components/parts/Button/MainButton';
import { Modal } from '../../components/parts/Modal/Modal';

export const DeckPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = function () {
    setIsModalOpen(true);
  };
  const closeModal = function () {
    setIsModalOpen(false);
  };

  return (
    <div>
      <MainButton handleClick={openModal}>
        <div
          style={{
            height: '30px',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
          }}
        >
          デッキ選択
        </div>
      </MainButton>
      <Modal isModalOpen={isModalOpen} onClick={closeModal}>
        <h1>デッキを選択しよう</h1>
      </Modal>
    </div>
  );
};

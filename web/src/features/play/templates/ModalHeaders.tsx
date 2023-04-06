import React, { useState } from 'react';
import { SubButton } from '../../../components/parts/SubButton/SubButton';
import { FiSettings, FiFile } from 'react-icons/fi';
import { Modal } from '../../../components/parts/Modal/Modal';
import { useDeviceType } from 'libs/store/MediaQuery';

interface ModalHeadersProps {}

export const ModalHeaders: React.FC<ModalHeadersProps> = (props) => {
  const {} = props;
  const { isSmartPhone } = useDeviceType();

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
    <>
      <div className="buttons">
        <SubButton handleClick={openCardListModal}>
          <FiFile size={isSmartPhone ? 14 : 20}></FiFile>
          <div className="button">カード一覧</div>
        </SubButton>
        <SubButton handleClick={openHowToPlayModal}>
          <FiSettings size={isSmartPhone ? 14 : 20}></FiSettings>
          <div className="button">遊び方</div>
        </SubButton>
      </div>
      <Modal onClick={closeCardListModal} isModalOpen={isOpenCardListModal}>
        <h1 style={{ color: '#fff' }}>カード一覧です</h1>
      </Modal>
      <Modal onClick={closeHowToPlayModal} isModalOpen={isOpenHowToPlayModal}>
        <h1 style={{ color: '#fff' }}>遊び方です</h1>
      </Modal>
      <style jsx>{`
        .button {
          font-size: 10px;
          width: 50px;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media screen and (min-width: 900px) {
          .button {
            font-size: 16px;
            width: 100px;
          }

          .buttons {
            height: 90px;
          }
        }

        @media screen and (min-width: 1400px) {
          .button {
            font-size: 18px;
            width: 140px;
          }

          .buttons {
            height: 100px;
          }
        }
      `}</style>
    </>
  );
};

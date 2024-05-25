import React from 'react';
import styled from './index.module.scss';
import { IconType } from 'react-icons';
import { IoMdClose } from 'react-icons/io';

type Props = {
  icon: IconType;
  text: string;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children: React.ReactNode;
};

export const ModalButtonPresentation: React.FC<Props> = ({
  icon: Icon,
  text,
  isOpen,
  handleOpen,
  handleClose,
  children,
}) => {
  return (
    <div>
      <button className={styled.button} aria-label={`${text}ダイアログを開く`} onClick={handleOpen}>
        <Icon size={24} className={styled.icon} />
        <span className={styled.text}>{text}</span>
      </button>
      {isOpen && (
        <div className={styled.modal}>
          <div className={styled.modalContent}>
            <button
              type="button"
              className={styled.closeButton}
              aria-label={`${text}ダイアログを閉じる`}
              onClick={handleClose}
            >
              <IoMdClose size={24} />
            </button>
            <div className={styled.modalBody}>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

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
  modalLabel: string;
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
};

export const ModalButtonPresentation: React.FC<Props> = ({
  icon: Icon,
  text,
  isOpen,
  handleOpen,
  handleClose,
  children,
  modalLabel,
  closeButtonRef,
}) => {
  return (
    <div>
      <button className={styled.button} aria-label={`${text}ダイアログを開く`} onClick={handleOpen}>
        <Icon size={24} className={styled.icon} />
        <span className={styled.text}>{text}</span>
      </button>
      {isOpen && (
        <div className={styled.modal}>
          <button
            type="button"
            className={styled.closeButton}
            aria-label={`${text}ダイアログを閉じる`}
            onClick={handleClose}
            ref={closeButtonRef}
            tabIndex={-1}
          >
            <IoMdClose size={24} />
          </button>
          <div
            className={styled.modalContent}
            role="dialog"
            aria-modal
            aria-label={modalLabel}
            id="modalContent"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

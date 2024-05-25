import React from 'react';
import { ModalButtonPresentation } from './presentations/';
import { useModalButton } from './hooks';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  icon: IconType;
  children: React.ReactNode;
  modalLabel: string;
};

export const ModalButton: React.FC<Props> = ({ text, icon, children, modalLabel }) => {
  const { isOpen, handleOpenModal, handleCloseModal, closeButtonRef } = useModalButton();
  return (
    <ModalButtonPresentation
      icon={icon}
      text={text}
      isOpen={isOpen}
      handleOpen={handleOpenModal}
      handleClose={handleCloseModal}
      modalLabel={modalLabel}
      closeButtonRef={closeButtonRef}
    >
      {children}
    </ModalButtonPresentation>
  );
};

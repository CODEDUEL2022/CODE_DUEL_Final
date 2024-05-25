import React from 'react';
import { ModalButtonPresentation } from './presentations/';
import { useModalButton } from './hooks';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  icon: IconType;
  children: React.ReactNode;
};

export const ModalButton: React.FC<Props> = ({ text, icon, children }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModalButton();
  return (
    <ModalButtonPresentation
      icon={icon}
      text={text}
      isOpen={isOpen}
      handleOpen={handleOpenModal}
      handleClose={handleCloseModal}
    >
      {children}
    </ModalButtonPresentation>
  );
};

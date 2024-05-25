import { useState } from 'react';

type UseModalButton = () => {
  isOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

export const useModalButton: UseModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

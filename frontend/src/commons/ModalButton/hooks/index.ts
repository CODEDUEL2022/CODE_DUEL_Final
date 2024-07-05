import { useState, useRef, useEffect, use } from 'react';

type UseModalButton = () => {
  isOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
};

export const useModalButton: UseModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      closeButtonRef.current?.blur();
    }
  }, [isOpen]);

  // modalContent内でフォーカストラップを実装
  useEffect(() => {
    if (isOpen) {
      const modalContent = document.getElementById('modal');
      const focusableElements = modalContent?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      };

      firstFocusableElement.focus();
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

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
    closeButtonRef,
  };
};

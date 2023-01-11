import React, { useState } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isModalOpen: Boolean;
  width: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isModalOpen, width, children, onClick } = props;
  if (isModalOpen === false) return null;

  // 親コンポーネントで以下を管理
  // const [isModalOpen, setIsModalOpen] = useState<Boolean>(true);
  // const closeModal = () => {
  //   isModalOpen && setIsModalOpen(false);
  // };

  return (
    <div className={styles.overlay} onClick={onClick}>
      <div className={styles.animation}>
        <div className={styles.modal} style={{ width: width }}>
          <span className={styles.closeBtn} onClick={onClick}>
            &times;
          </span>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

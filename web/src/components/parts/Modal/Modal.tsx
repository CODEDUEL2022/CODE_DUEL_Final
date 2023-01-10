import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  width: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.animation}>
        <div className={styles.modal} style={{ width: props.width }}>
          <span className={styles.closeBtn}>&times;</span>
          <div className={styles.modalContent}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

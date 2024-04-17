import React from 'react';
import { IconType } from 'react-icons';
import styles from './index.module.scss';

type Props = {
  icon: IconType;
  handleClick: () => void;
  text: string;
  error?: boolean;
  disabled?: boolean;
};

export const IconButton: React.FC<Props> = ({ icon: Icon, handleClick, text }) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      <Icon size={24} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

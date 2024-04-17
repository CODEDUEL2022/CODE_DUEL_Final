import React from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  size: 'sm' | 'md' | 'lg';
  error: boolean;
  disabled: boolean;
};

export const Button: React.FC<Props> = ({ text, size = 'md', error, disabled }) => {
  const sizeStyle = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : '';
  const conditionStyle = error ? styles.error : disabled ? styles.disabled : styles.button;

  return (
    <button className={`${sizeStyle} ${conditionStyle}`}>
      {text}
      <span className={styles.text}>{text}</span>
    </button>
  );
};

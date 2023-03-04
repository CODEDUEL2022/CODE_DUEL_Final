import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  fontSize: string;
  text: string;
  handleClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { fontSize, text, handleClick } = props;

  return (
    <div className={styles.button} onClick={handleClick}>
      <span style={{ fontSize: fontSize }}>&#62; {text}</span>
    </div>
  );
};

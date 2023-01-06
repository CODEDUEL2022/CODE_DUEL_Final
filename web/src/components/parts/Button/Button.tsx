import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: String;
  handleClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { text, handleClick } = props;

  return (
    <div className={styles.button} onClick={handleClick}>
      <span>&#62; {text}</span>
    </div>
  );
};

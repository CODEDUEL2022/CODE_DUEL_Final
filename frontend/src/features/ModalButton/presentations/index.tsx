import React from 'react';
import styled from './index.module.scss';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  text: string;
};

export const ModalButtonPresentation: React.FC<Props> = ({ icon: Icon, text }) => {
  return (
    <div>
      <button className={styled.button}>
        <Icon size={24} className={styled.icon} />
        <span className={styled.text}>{text}</span>
      </button>
    </div>
  );
};

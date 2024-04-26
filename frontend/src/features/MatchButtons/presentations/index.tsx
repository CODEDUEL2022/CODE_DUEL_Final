import React from 'react';
import styled from './index.module.scss';
import { IconButton } from '@/ui/IconButton';
import { BiWorld } from 'react-icons/bi';
import { IoMdPeople } from 'react-icons/io';
import { RiRobot2Line } from 'react-icons/ri';

type Props = {};

export const MatchButtonsPresentation: React.FC<Props> = (props) => {
  return (
    <div className={styled.buttons}>
      <IconButton icon={BiWorld} text="Random Match" handleClick={() => {}} />
      <IconButton icon={IoMdPeople} text="Custom Match" handleClick={() => {}} />
      <IconButton icon={RiRobot2Line} text="CPU Match" handleClick={() => {}} />
    </div>
  );
};

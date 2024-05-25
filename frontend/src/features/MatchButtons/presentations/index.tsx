import React from 'react';
import styled from './index.module.scss';
import { IconButton } from '@/ui/IconButton';
import { BiWorld } from 'react-icons/bi';
import { IoMdPeople } from 'react-icons/io';
import { RiRobot2Line } from 'react-icons/ri';

type Props = {
  handleRandomMatch: () => void;
  handleCustomMatch: () => void;
  handleCpuMatch: () => void;
};

export const MatchButtonsPresentation: React.FC<Props> = ({
  handleRandomMatch,
  handleCustomMatch,
  handleCpuMatch,
}) => {
  return (
    <div className={styled.buttons}>
      <IconButton icon={BiWorld} text="Random Match" handleClick={handleRandomMatch} />
      <IconButton icon={IoMdPeople} text="Custom Match" handleClick={handleCustomMatch} />
      <IconButton icon={RiRobot2Line} text="CPU Match" handleClick={handleCpuMatch} />
    </div>
  );
};

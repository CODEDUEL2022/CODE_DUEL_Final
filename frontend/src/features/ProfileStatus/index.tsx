'use client';

import React from 'react';
import { ProfileStatusPresentation } from './presentations/';
import { useProfileStatus } from './hooks';

type Props = {};

export const ProfileStatus: React.FC<Props> = () => {
  const { name, rate } = useProfileStatus();
  return <ProfileStatusPresentation name={name} rate={rate} />;
};

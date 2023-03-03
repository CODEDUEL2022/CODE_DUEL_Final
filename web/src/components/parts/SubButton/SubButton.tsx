import React from 'react';
import { ArwesThemeProvider, Button, Text } from '@arwes/core';

interface SubButtonProps {
  text: String;
}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const { text } = props;

  return (
    <div>
      <ArwesThemeProvider>
        <Button></Button>
      </ArwesThemeProvider>
    </div>
  );
};

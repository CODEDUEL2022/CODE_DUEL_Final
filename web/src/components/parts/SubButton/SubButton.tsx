import React from 'react';
import { ArwesThemeProvider, Button, Text } from '@arwes/core';

interface SubButtonProps {
  text: String;
  onClick: () => void;
}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const { text, onClick } = props;

  return (
    <div>
      <ArwesThemeProvider>
        <Button palette="primary" onClick={onClick}>
          <Text>{text}</Text>
        </Button>
      </ArwesThemeProvider>
    </div>
  );
};

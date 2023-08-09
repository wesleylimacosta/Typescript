import {Button} from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

interface IButtonProps {
  name: string;
  onClick: MouseEventHandler;
}

const DButton: React.FC<IButtonProps> = ({ name, onClick }) => {
  return (
    <Button backgroundColor="teal" color="white" mt="2" width="100vw" onClick={onClick}>
      {name}
    </Button>
  );
};

export default DButton
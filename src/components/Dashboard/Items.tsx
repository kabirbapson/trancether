import React from 'react';
import {Button, HStack, VStack} from 'native-base';
import Menu from './../../assets/images/Menu.svg';
import Notification from './../../assets/images/Notification.svg';
export const Items = () => {
  return (
    <VStack w={'full'} alignItems={'center'} justifyContent={'space-between'}>
      <Button overflow={0} variant={'ghost'}>
        <Menu />
      </Button>
      <Button overflow={0} variant={'ghost'}>
        <Notification />
      </Button>
    </VStack>
  );
};

export default Items;

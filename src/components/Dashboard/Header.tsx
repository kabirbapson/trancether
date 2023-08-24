import React from 'react';
import {Button, HStack} from 'native-base';
import Menu from './../../assets/images/Menu.svg';
import Notification from './../../assets/images/Notification.svg';
export const Header = () => {
  return (
    <HStack w={'full'} alignItems={'center'} justifyContent={'space-between'}>
      <Button overflow={0} variant={'ghost'}>
        <Menu />
      </Button>
      <Button overflow={0} variant={'ghost'}>
        <Notification />
      </Button>
    </HStack>
  );
};

export default Header;

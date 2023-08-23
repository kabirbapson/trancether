import React from 'react';
import {Button, Text} from 'native-base';

function AButton({btnText, onPress}) {
  return (
    <Button
      w={'139'}
      h={55}
      variant={'solid'}
      borderBottomRightRadius={20}
      bg={'#36ACFD'}
      onPress={onPress}
      justifyContent={'center'}>
      <Text color={'white'} fontWeight={'extrabold'} fontSize={16}>
        {btnText}
      </Text>
    </Button>
  );
}
export default AButton;

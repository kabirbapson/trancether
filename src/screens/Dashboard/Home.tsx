import React from 'react';
import {Box, Button, HStack, Text} from 'native-base';
import Header from '../../components/Dashboard/Header';
// import Items from '../../components/Dashboard/Items';
// import Header from '../../components/Dashboard/Header';

interface ItemsProps {
  item: string;
}

export const Items = ({item}: ItemsProps) => {
  return (
    <Text color={'white'} fontSize={'2xl'} fontWeight={'bold'}>
      {item}
    </Text>
  );
};
export default function Home({navigation}) {
  return (
    <Box
      flex={1}
      bg={'#08060F'}
      px={'20px'}
      pt={4}
      safeArea
      // justifyContent={'center'}
      alignItems={'center'}>
      <Header />
      <HStack
        space={'47px'}
        // bg={'red.300'}
        px={3}
        w={'full'}
        alignItems={'center'}>
        <Items item={'BUY'} />
        <Items item={'SELL'} />
        <Text color={'white'} fontSize={'2xl'} fontWeight={'bold'}>
          OFFERS
        </Text>
      </HStack>
      <Text color={'red.400'}>Hello</Text>
      <Button onPress={() => navigation.navigate('Home')}>Links</Button>
    </Box>
  );
}

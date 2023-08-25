import React from 'react';
import {Box, Button, Text} from 'native-base';
import Header from '../../components/Dashboard/Header';

export default function Messages({navigation}) {
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
      <Text flex={2} fontSize={24} color={'warmGray.600'}>
        Messages will appear here
      </Text>
      <Button onPress={() => navigation.navigate('Home')}>to Home</Button>
    </Box>
  );
}

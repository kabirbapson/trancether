import React from 'react';
import {Box, Button, Text} from 'native-base';

export default function Messages({navigation}) {
  return (
    <Box
      safeArea
      // bg={'#08060F'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Text>Messages will appear here</Text>
      <Button onPress={() => navigation.navigate('Home')}>to Home</Button>
    </Box>
  );
}

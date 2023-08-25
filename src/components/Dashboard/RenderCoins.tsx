import React from 'react';
import {Box, Circle, Divider, Text} from 'native-base';

const RenderCoins = item => {
  return (
    <Box key={item.id} p={'3'}>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
       >
        <Box alignSelf={'center'}  mr={3}>{item.arrowIcon}</Box>
        <Box m={1} flex={1} >
          <Box>
            <Text fontSize={17} bold fontFamily={'exo 2'} color={'#849FB2'}>
              {item.tType}
            </Text>
          </Box>
          <Box flexDir={'row'} alignItems={'center'}>
            <Text fontSize={12} color={'#2E485B'}>
              {item.tTime}
            </Text>
            <Circle bg={'#2E485B'} m={2.5} size={1} />
            <Text fontSize={12} color={'#2E485B'}>
              {item.tDate}
            </Text>
          </Box>
        </Box>
        <Box m={1} alignItems={'flex-end'}>
          <Text fontSize={17} color={'#5DAF76'}>
            {item.tPlusMinus}
          </Text>
          <Text fontSize={12} color={'#2E485B'}>
            {item.tAmount}
          </Text>
        </Box>
      </Box>
      <Divider mt={4} bg={'#2E485B'} h={0.3} />
    </Box>
  );
};

export default RenderCoins;

import React from 'react';
import {Box, Button, Text} from 'native-base';
import Header from '../../components/Account/Header';

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
      <Text color={'red.400'}>Hello</Text>
      <Button onPress={() => navigation.navigate('Home')}>Links</Button>
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Box>
            <Text>{item.title}</Text>
          </Box>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      /> */}
    </Box>
  );
}

import React from 'react';
import {FlatList} from 'react-native';
import {Box, Text} from 'native-base';

const DATA = [
  {
    id: 1,
    iconName: 'mail',
    title: 'Emergency',
    subtitle: 'List of emergency phone numbers',
    bgColor: 'cyan',
  },
  {
    id: 2,
    iconName: 'eye',
    title: 'Info & Tips',
    subtitle: 'Know something? Say something',
    bgColor: 'brown',
  },
  {
    id: 3,
    iconName: 'alert-circle',
    title: 'Happening Now',
    subtitle: "What's happening in your area?",
    bgColor: 'ligthorange',
  },
  {
    id: 4,
    iconName: 'message-circle',
    title: 'Education',
    subtitle: 'How can we help in the education sector?',
    bgColor: 'yellow',
  },
];

function Home({navigation, data}) {
  // console.log({data}, navigation);

  return (
    <Box
      safeArea
      // bg={'#08060F'}
      justifyContent={'center'}
      alignItems={'center'}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Box>
            <Text>{item.title}</Text>
          </Box>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
export default Home;

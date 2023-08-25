import React from 'react';
import {Box, Button, Circle, HStack, VStack} from 'native-base';
import Menu from './../../assets/images/Menu.svg';
import Notification from './../../assets/images/Notification.svg';
import {StyleSheet, Text} from 'react-native';

interface ItemsProps {
  item: string;
  activeItem: boolean;
  onPress: () => void;
}
export const Items = ({item, activeItem, onPress}: ItemsProps) => {
  const activeColor = {color: '#36ACFD'};
  return (
    <Box>
      <Button variant={'ghost'} p={2} onPress={onPress}>
        <Text style={[styles.Items, activeItem ? activeColor : {}]}>
          {item}
        </Text>
      </Button>
      {activeItem && <Circle bg={'#36ACFD'} m={2.5} size={2} mt={3} />}
    </Box>
  );
};

export default Items;

const styles = StyleSheet.create({
  Items: {
    textTransform: 'uppercase',
    color: '#2E485B',
    fontSize: 18,
    fontWeight: '900',
  },
});

import React, {useCallback, useMemo, useRef} from 'react';
import {Box, Button, Divider, HStack, Modal, Text, Toast} from 'native-base';
import Header from '../../components/Dashboard/Header';
import Items from '../../components/Dashboard/Items';
import Bitcoin from '../../assets/images/Bitcoin.svg';
import Ethereum from '../../assets/images/Ethereum.svg';
import Litecoin from '../../assets/images/Litecoin.svg';
import Subscreen_pullup from '../../assets/images/Subscreen_pullup.svg';
import Subscreen_pulldown from '../../assets/images/Subscreen_pulldown.svg';

import {StyleSheet, View} from 'react-native';

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BackDrop from '../../components/Dashboard/BackDrop';

const icons = [
  {currency: 'Bitcoin', icon: <Bitcoin />},
  {currency: 'Ethereum', icon: <Ethereum />},
  {currency: 'Litecoin', icon: <Litecoin />},
];

export default function Home() {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '85%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    if (index === 1) {
      setIsSheetUp(true);
    } else setIsSheetUp(false);
  }, []);
  const [buy, setBuy] = React.useState(true);
  const [sell, setSell] = React.useState(false);
  const [offers, setOffers] = React.useState(false);
  const [isSheetUp, setIsSheetUp] = React.useState(false);

  const handleBuy = () => {
    setBuy(true);
    setOffers(false);
    setSell(false);
  };

  const handleSell = () => {
    setSell(true);
    setBuy(false);
    setOffers(false);
    Toast.show({
      title: 'Sell Coming Soon!!!',
    });
  };

  const handleOffers = () => {
    setOffers(true);
    setBuy(false);
    setSell(false);
    Toast.show({
      title: 'Offers Coming Soon!!!',
    });
  };
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const renderItem = useCallback(
    item => (
      <View key={item} style={{padding: 6, margin: 6}}>
        <Text color={'white'}>{item}</Text>
        <Divider mt={2} />
      </View>
    ),
    [],
  );

  const handleComponent = () => {
    return (
      <Box alignSelf={'center'} mt={4}>
        {isSheetUp ? <Subscreen_pulldown /> : <Subscreen_pullup />}
      </Box>
    );
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingHorizontal: 'auto',
      }}>
      <Box
        flex={1}
        bg={'#08060F'}
        px={'20px'}
        pt={4}
        safeArea
        // justifyContent={'center'}
        alignItems={'center'}>
        <Header />
        <Box>
          <HStack mt={10} mb={5} space={'45px'} px={1} w={'full'}>
            <Items item={'buy'} activeItem={buy} onPress={handleBuy} />
            <Items item={'SELL'} activeItem={sell} onPress={handleSell} />
            <Items item={'OFFERS'} activeItem={offers} onPress={handleOffers} />
          </HStack>
          <Box px={3} w={'full'}>
            <Text letterSpacing={3} color={'#849FB2'} fontSize={24}>
              {buy
                ? 'What will you like to buy today Meng?'
                : sell
                ? 'What will you like to sell today Meng?'
                : "Hey Meng! we've got some offers for you"}
            </Text>
          </Box>
          <Box px={3}>
            <Text
              my={4}
              pl={1}
              color={'#2E485B'}
              textTransform={'uppercase'}
              bold={true}
              fontSize={14}>
              select currency
            </Text>
            <HStack
              // p={2}
              w={'full'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              {icons.map(item => {
                return (
                  <Button
                    key={item.currency}
                    variant={'ghost'}
                    onPress={() => {}}
                    p={1}>
                    {item.icon}
                  </Button>
                );
              })}
            </HStack>
          </Box>
        </Box>
        {/* <BackDrop /> */}
        <BottomSheet
          // style={{borderRadius: 10}}
          onChange={handleSheetChanges}
          handleComponent={handleComponent}
          ref={sheetRef}
          snapPoints={snapPoints}
          backgroundStyle={{
            backgroundColor: '#080812',
            borderRadius: 20,
            borderWidth: 0.5,
            borderTopColor: '#2E485B',
            // padding: 4,
            // margin: 4,
          }}
          // onChange={handleSheetChange}
        >
          <Box bg={'#080812'} flex={1} m={4}>
            {/* <BottomSheetView
              style={{
                backgroundColor: 'green',
                margin: 10,
                padding: 4,
                margin: 4,
              }}>
              <Text>Awesome </Text>
            </BottomSheetView> */}
            <Text color={'amber.100'}>Today</Text>
            <BottomSheetScrollView contentContainerStyle={{}}>
              {data.map(renderItem)}
            </BottomSheetScrollView>
          </Box>
        </BottomSheet>
      </Box>
    </GestureHandlerRootView>
  );
}

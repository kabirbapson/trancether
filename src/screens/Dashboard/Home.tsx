import React, {useCallback, useMemo, useRef} from 'react';
import {Box, Button, Divider, HStack, Modal, Text, Toast} from 'native-base';
import Header from '../../components/Dashboard/Header';
import Items from '../../components/Dashboard/Items';
import Bitcoin from '../../assets/images/Bitcoin.svg';
import Ethereum from '../../assets/images/Ethereum.svg';
import Litecoin from '../../assets/images/Litecoin.svg';
import Subscreen_pullup from '../../assets/images/Subscreen_pullup.svg';
import Subscreen_pulldown from '../../assets/images/Subscreen_pulldown.svg';
import TodayFilter from '../../assets/images/TodayFilter.svg';
import ArrowLeft from '../../assets/images/ArrowLeft.svg';
import ArrowRight from '../../assets/images/ArrowRight.svg';

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

const coinsData = [
  {
    id: 1,
    tType: 'Bought',
    arrowIcon: <ArrowLeft />,
    tTime: '12:00pm',
    tDate: '11/11/2020',
    tAmount: 'N300,000',
    tPlusMinus: '+1.25BTC',
  },
  {
    id: 2,
    tType: 'Sold',
    arrowIcon: <ArrowRight />,
    tTime: '9:00pm',
    tDate: '11/11/2020',
    tAmount: 'N500,000',
    tPlusMinus: '-2.32BTC',
  },
  {
    id: 3,
    tType: 'Sold',
    arrowIcon: <ArrowRight />,
    tTime: '8:45pm',
    tDate: '11/11/2020',
    tAmount: 'N250,000',
    tPlusMinus: '-0.81BTC',
  },
  {
    id: 4,
    tType: 'Bought',
    arrowIcon: <ArrowLeft />,
    tTime: '7:00pm',
    tDate: '11/11/2020',
    tAmount: 'N250,000',
    tPlusMinus: '+0.96BTC',
  },
  {
    id: 5,
    tType: 'Sold',
    arrowIcon: <ArrowRight />,
    tTime: '6:00pm',
    tDate: '11/11/2020',
    tAmount: 'N50,000',
    tPlusMinus: '-0.11BTC',
  },
  {
    id: 6,
    tType: 'Bought',
    arrowIcon: <ArrowLeft />,
    tTime: '5:23pm',
    tDate: '11/11/2020',
    tAmount: 'N45,000',
    tPlusMinus: '+0.10BTC',
  },
  {
    id: 7,
    tType: 'Sold',
    arrowIcon: <ArrowRight />,
    tTime: '4:13pm',
    tDate: '11/11/2020',
    tAmount: 'N200,000',
    tPlusMinus: '-0.71BTC',
  },
  {
    id: 8,
    tType: 'Sold',
    arrowIcon: <ArrowRight />,
    tTime: '1:54pm',
    tDate: '11/11/2020',
    tAmount: 'N250,000',
    tPlusMinus: '-0.96BTC',
  },
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
      Array(20)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const renderItem = useCallback(
    item => (
      <Box key={item.id} p={'3'}>
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          bg={'green.900'}>
          <Box m={2}>{item.arrowIcon}</Box>
          <Box m={1} flex={1} bg={'gray.100'}>
            <Box>
              <Text fontSize={17} bold fontFamily={'exo 2'} color={'#849FB2'}>
                {item.tType}
              </Text>
            </Box>
            <Box flexDir={'row'}>
              <Text fontSize={12} color={'#2E485B'}>{item.tTime}</Text>
              {'`'}
              <Text fontSize={12} color={'#2E485B'}>{item.tDate}</Text>

            </Box>
          </Box>
          <Box m={1} bg={'gray.200'} alignItems={'flex-end'}>
            <Text fontSize={17} color={'#5DAF76'}>
              {item.tPlusMinus}
            </Text>
            <Text   fontSize={12} color={'#2E485B'}>{item.tAmount}</Text>
          </Box>
        </Box>
        <Divider mt={2} bg={'red.100'} h={0.3} />
      </Box>
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
            <Box mx={1} mb={2} px={2}>
              <TodayFilter />
            </Box>
            <BottomSheetScrollView contentContainerStyle={{}}>
              {coinsData.map(renderItem)}
            </BottomSheetScrollView>
          </Box>
        </BottomSheet>
      </Box>
    </GestureHandlerRootView>
  );
}

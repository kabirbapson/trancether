import React, {useCallback, useMemo, useRef} from 'react';
import {Box, Button, HStack, Text, Toast} from 'native-base';
import Header from '../../components/Dashboard/Header';
import Items from '../../components/Dashboard/Items';
import Bitcoin from '../../assets/images/Bitcoin.svg';
import Ethereum from '../../assets/images/Ethereum.svg';
import Litecoin from '../../assets/images/Litecoin.svg';
import Subscreen_pullup from '../../assets/images/Subscreen_pullup.svg';
import Subscreen_pulldown from '../../assets/images/Subscreen_pulldown.svg';
import TodayFilter from '../../assets/images/TodayFilter.svg';
import coinData from '../../utils/coinData.json';

import {StyleSheet} from 'react-native';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RenderCoins from '../../components/Dashboard/RenderCoins';

const icons = [
  {currency: 'Bitcoin', icon: <Bitcoin />},
  {currency: 'Ethereum', icon: <Ethereum />},
  {currency: 'Litecoin', icon: <Litecoin />},
];

export default function Home() {
  const [buy, setBuy] = React.useState(true);
  const [sell, setSell] = React.useState(false);
  const [offers, setOffers] = React.useState(false);
  const [isSheetUp, setIsSheetUp] = React.useState(false);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '85%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    if (index === 1) {
      setIsSheetUp(true);
    } else {
      setIsSheetUp(false);
    }
  }, []);

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

  const handleComponent = () => {
    return (
      <Box alignSelf={'center'} mt={4}>
        {isSheetUp ? <Subscreen_pulldown /> : <Subscreen_pullup />}
      </Box>
    );
  };

  return (
    <GestureHandlerRootView style={styles.gesture}>
      <Box
        flex={1}
        bg={'#08060F'}
        px={'20px'}
        pt={4}
        safeArea
        alignItems={'center'}>
        <Header />
        <Box opacity={isSheetUp ? 0.5 : 1}>
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

        <BottomSheet
          onChange={handleSheetChanges}
          handleComponent={handleComponent}
          ref={sheetRef}
          snapPoints={snapPoints}
          backgroundStyle={styles.bottomSheetStyle}>
          <Box bg={'#080812'} flex={1} my={2} mx={4}>
            <Box mx={1} mb={2} px={2}>
              <TodayFilter />
            </Box>
            <BottomSheetScrollView contentContainerStyle={{}}>
              {coinData.map(RenderCoins)}
            </BottomSheetScrollView>
          </Box>
        </BottomSheet>
      </Box>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
  bottomSheetStyle: {
    backgroundColor: '#080812',
    borderRadius: 20,
    borderWidth: 0.5,
    borderTopColor: '#2E485B',
  },
});

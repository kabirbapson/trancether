import React from 'react';
import {Box, Button, HStack, Text} from 'native-base';
import Header from '../../components/Dashboard/Header';
import Items from '../../components/Dashboard/Items';
import Bitcoin from '../../assets/images/Bitcoin.svg';
import Ethereum from '../../assets/images/Ethereum.svg';
import Litecoin from '../../assets/images/Litecoin.svg';

const icons = [
  {currency: 'Bitcoin', icon: <Bitcoin />},
  {currency: 'Ethereum', icon: <Ethereum />},
  {currency: 'Litecoin', icon: <Litecoin />},
];

export default function Home({navigation}) {
  const [buy, setBuy] = React.useState(true);
  const [sell, setSell] = React.useState(false);
  const [offers, setOffers] = React.useState(false);

  const handleBuy = () => {
    setBuy(true);
    setOffers(false);
    setSell(false);
    console.log('buy');
  };

  const handleSell = () => {
    setSell(true);
    setBuy(false);
    setOffers(false);
    console.log('sell');
  };

  const handleOffers = () => {
    setOffers(true);
    setBuy(false);
    setSell(false);
    console.log('offers');
  };

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
                variant={'ghost'}
                onPress={() => console.log(item.currency)}
                p={1}>
                {item.icon}
              </Button>
            );
          })}
        </HStack>
      </Box>

      <Button onPress={() => navigation.navigate('Home')}>Links</Button>
    </Box>
  );
}

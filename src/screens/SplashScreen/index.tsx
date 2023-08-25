import React, {useEffect} from 'react';
import {Box, Image} from 'native-base';
import splash from './../../assets/images/splash.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      fetchDataFromStorage();
    }, 1000);
  });

  async function fetchDataFromStorage() {
    try {
      const data = await AsyncStorage.getItem('auth');
      if (data) {
        navigation.navigate('HomeBottomBar', {data});
      } else {
        navigation.navigate('AccountSetup');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box flex={1}>
      <Image source={splash} alt="splash" w={'100%'} h={'100%'} />
    </Box>
  );
}

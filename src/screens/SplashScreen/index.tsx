import React, {useEffect} from 'react';
import {Box, Image} from 'native-base';
import splash from './../../assets/images/splash.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}: any) {
  useEffect(() => {
    fetchDataFromStorage();
    // setTimeout(() => {
    // navigation.navigate('HomeBottomBar');
    //   console.log('onborad')
    // }, 1000);
  });

  async function fetchDataFromStorage() {
    try {
      const data = await AsyncStorage.getItem('auth');
      if (data) {
        navigation.navigate('HomeBottomBar', {data});
      } else {
        navigation.navigate('Account');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <Image source={splash} alt="splash" w={'100%'} h={'100%'} />
    </Box>
  );
}

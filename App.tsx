import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import ScreenNavigation from './src/navigations/ScreenNavigation';
import customTheme from './src/utils/theme';
function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <ScreenNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

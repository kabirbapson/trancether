import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import ScreenNavigation from './src/navigations/ScreenNavigation';
import customTheme from './src/utils/theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <ScreenNavigation />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </NativeBaseProvider>
  );
}

export default App;

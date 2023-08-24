import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Input,
  Text,
} from 'native-base';
import logo from './../../assets/images/widelogo.png';
import activeIcon from './../../assets/images/Active.svg';
import inActiveIcon from './../../assets/images/Inactive.svg';
import SignIn from './SignIn';
import SignUp from './SignUp';

function AccountSetup() {
  const [showSignIn, setShowSignIn] = useState<boolean>(true);

  return (
    <Box w={'full'} flex={1} p={2} safeArea bg="#08060F" alignItems={'center'}>
      <Box w={'full'} h={'10%'} alignItems={'center'} justifyContent={'center'}>
        <Image source={logo} alt="Logo" />
      </Box>

      <HStack
        w={'full'}
        mt={10}
        // bg={'white'}
        alignItems={'center'}
        justifyContent={'space-around'}>
        <Button
          _text={{color: showSignIn ? '#B2C5D4' : '#2E485B', fontSize: 15}}
          variant={'ghost'}
          onPress={() => setShowSignIn(true)}>
          SIGN IN
        </Button>

        {showSignIn ? (
          <HStack w={'50%'} alignItems={'center'} justifyContent={'center'}>
            <Icon
              left={'-15'}
              position={'absolute'}
              name={activeIcon}
              as={activeIcon}
            />
            <Divider bg={'#2E485B'} />
            <Icon name={inActiveIcon} as={inActiveIcon} />
          </HStack>
        ) : (
          <HStack w={'50%'} alignItems={'center'} justifyContent={'center'}>
            <Icon name={inActiveIcon} as={inActiveIcon} />
            <Divider bg={'#2E485B'} />
            <Icon
              right={'-15'}
              position={'absolute'}
              name={activeIcon}
              as={activeIcon}
            />
          </HStack>
        )}
        <Button
          _text={{color: showSignIn ? '#2E485B' : '#B2C5D4', fontSize: 15}}
          variant={'ghost'}
          onPress={() => setShowSignIn(false)}>
          SIGN UP
        </Button>
      </HStack>

      <Box w={'full'} mt={10}>
        {showSignIn ? <SignIn /> : <SignUp />}
      </Box>
    </Box>
  );
}
export default AccountSetup;

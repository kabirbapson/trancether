import React, {useState} from 'react';
import {Box, Button, Divider, HStack, Text, VStack} from 'native-base';
import {Sae} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AInput from '../../../components/Account/AInput';
import AButton from '../../../components/Account/AButton';
import {validateEmail} from '../../../utils/helper';
import {StyleSheet} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInvalidEmail, setIsInValidEmail] = useState<boolean>(false);
  const [isInvalidPassword, setIsInValidPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // validateEmail(email);
  // const isValid = !validateEmail(email);
  // console.log({isValid}, validateEmail(email));
  const checkEmail = () => {
    if (!validateEmail(email)) {
      setIsInValidEmail(true);
    } else {
      setIsInValidEmail(false);
    }
  };
  const checkPassword = () => {
    if (password.length < 6) {
      setIsInValidPassword(true);
    } else {
      setIsInValidPassword(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <VStack m={4}>
      <AInput
        type={'text'}
        onBlur={checkEmail}
        value={email}
        onChangeText={setEmail}
        placeHolder={'Email'}
        // @ts-ignore
        borderBottomColor={isInvalidEmail ? '#E73B62' : '#203140'}
      />
      {isInvalidEmail && <Text color={'#E73B62'}>Invalid Email</Text>}

      <AInput
        onBlur={checkPassword}
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChangeText={setPassword}
        placeHolder={'Password'}
        // @ts-ignore
        borderBottomColor={isInvalidPassword ? '#E73B62' : '#203140'}
        InputRightElement={
          <FontAwesomeIcon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={20}
            color={'#203140'}
            onPress={togglePasswordVisibility}
          />
        }
      />
      {isInvalidPassword && (
        <Text fontSize={12} fontWeight={'medium'} color={'#E73B62'}>
          Password must be at least 6 characters
        </Text>
      )}

      <HStack
        mt={'50px'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <AButton btnText={'SIGN IN'} onPress={() => {}} />
        <Button
          _text={{color: '#2E485B', fontSize: 15}}
          variant={'ghost'}
          onPress={() => {}}>
          Forgot password?
        </Button>
      </HStack>
    </VStack>
  );
}
export default SignIn;

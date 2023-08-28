import React, {useState} from 'react';
import {Button, HStack, Text, VStack} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AInput from '../../../components/Account/AInput';
import AButton from '../../../components/Account/AButton';
import {validateEmail} from '../../../utils/helper';

function SignIn({navigation}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInvalidEmail, setIsInValidEmail] = useState<boolean>(false);
  const [isInvalidPassword, setIsInValidPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  const handleSignIn = () => {
    if (!validateEmail(email) || password.length < 6) {
      setIsInValidPassword(true);
      setIsInValidEmail(true);
      console.log('failed');
      return;
    }
    setIsInValidPassword(false);
    setIsInValidEmail(false);
    setIsLoading(true);
    navigation.navigate('Dashboard');
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
        <AButton
          isDisabled={password.length < 5 || !validateEmail(email)}
          isLoading={isLoading}
          btnText={'SIGN IN'}
          onPress={handleSignIn}
        />
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

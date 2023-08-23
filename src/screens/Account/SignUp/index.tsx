import React, {useState} from 'react';
import {HStack, Text, VStack} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AInput from '../../../components/Account/AInput';
import AButton from '../../../components/Account/AButton';
import {validateEmail} from '../../../utils/helper';

function SignUp() {
  const [fullName, setFullName] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isInvalidEmail, setIsInValidEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isInvalidPassword, setIsInValidPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const checkName = () => {
    if (!fullName || fullName.length < 5) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

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
        // inValid={isInvalidEmail}
        onBlur={checkName}
        value={fullName}
        onChangeText={setFullName}
        placeHolder={'Full name'}
        // @ts-ignore
        borderBottomColor={isNameValid ? '#E73B62' : '#203140'}
      />
      {isNameValid && <Text color={'#E73B62'}>Please enter a valid name</Text>}

      <AInput
        type={'text'}
        // inValid={isInvalidEmail}
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
        <AButton btnText={'SIGN UP'} onPress={() => {}} />
      </HStack>
    </VStack>
  );
}
export default SignUp;

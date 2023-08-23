import React, {useState} from 'react';
import {Box, Divider, Input, Text} from 'native-base';
import {Sae} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type InputType = 'password' | 'text';

type AInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
  type: InputType;
  onBlur?: () => void;
};

function AInput({
  value,
  onChangeText,
  placeHolder,
  type,
  onBlur,
  ...prop
}: AInputProps) {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Box justifyContent={'center'} mt={4}>
      {(value.length || focus) && (
        <Text mb={1} fontWeight={'bold'} fontSize={14} color={'#2E485B'}>
          {placeHolder}
        </Text>
      )}
      <Input
        autoCapitalize="none"
        type={type}
        py={4}
        fontSize={17}
        mb={'10px'}
        onFocus={() => setFocus(true)}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        variant="underlined"
        color={'#849FB2'}
        placeholder={placeHolder}
        {...prop}
      />
    </Box>
  );
}
export default AInput;

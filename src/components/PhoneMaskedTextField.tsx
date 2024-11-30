import React from 'react';
import { useMaskedInputProps } from 'react-native-mask-input';
import { Masks } from 'react-native-mask-input';
import { TextField } from './TextField';
import { TextFieldProps } from '../types';
import { PhoneIcon } from '../icons';

export const PhoneMaskedTextField = (props: TextFieldProps) => {
  const maskedInputProps = useMaskedInputProps({
    value: props.value,
    onChangeText: props.onChangeText,
    mask: Masks.RU_PHONE,
  });

  return (
    <TextField
      icon={<PhoneIcon />}
      {...props}
      {...maskedInputProps}
      placeholder={props.placeholder}
      keyboardType={'phone-pad'}
    />
  );
};

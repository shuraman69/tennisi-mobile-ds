import { TextField } from './TextField';
import React, { forwardRef } from 'react';
import { TextFieldProps } from '../types';
import { Masks, useMaskedInputProps } from 'react-native-mask-input';
import { CalendarIcon } from '../icons';

export const DateMaskedTextField = forwardRef((props: TextFieldProps, _) => {
  const maskedInputProps = useMaskedInputProps({
    value: props.value,
    onChangeText: props.onChangeText,
    mask: Masks.DATE_DDMMYYYY,
  });
  return (
    <TextField
      icon={<CalendarIcon />}
      {...props}
      {...maskedInputProps}
      keyboardType={'number-pad'}
      placeholder={props.placeholder}
    />
  );
});

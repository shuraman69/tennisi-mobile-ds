import React, { ComponentProps } from 'react';
import { TextField } from './TextField';

export const Textarea = (props: ComponentProps<typeof TextField>) => {
  return <TextField {...props} multiline />;
};

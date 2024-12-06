export const TextFieldDocs = `
# TextField Component

This document describes the \`TextField\` component, a customizable text input component for React Native applications.

## Import

\`\`\`jsx
import {TextField} from 'path/to/TextField'
\`\`\`

### \`Props

| Prop          | Type                   | Description                                                          |
| ------------- | ---------------------- | -------------------------------------------------------------------- |
| \`label\`     | \`string\`             | Label displayed above the text input.                                 |
| \`description\` | \`string\`           | Optional description text displayed below the text input.             |
| \`icon\`      | \`React.ReactElement\` | Optional icon displayed to the left of the text input.                |
| ...TextFieldProps | \`TextFieldProps\` | Additional props from \`TextFieldProps\`, see \`../types\` for details. |

## Usage

\`\`\`jsx
import React, { useRef } from 'react';
import { View } from 'react-native';
import { TextField } from './path/to/TextField';

const App = () => {
  const inputRef = useRef<TextInput>(null);

  return (
    <View>
      <TextField
        ref={inputRef}
        label="Username"
        placeholder="Enter your username"
        icon={<Icon name="user" />}
        description="Please enter your username."
        onChangeText={(text) => {
          // handle text change
        }}
      />
    </View>
  );
};

export default App;
\`\`\`

## Theming

The \`TextField\` components appearance can be customized using the theme from \`useAppTheme\`. Customize the text inputs colors, styles, and behavior as per your applications theme configuration.

For more information on theming, refer to the \`useAppTheme\` hook documentation.


This documentation provides an overview of the \`TextField\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the React Native components used.
`;

export const CheckboxDocs = `
# CheckBox Component

This document describes the \`CheckBox\` component, a customizable checkbox component for React Native applications using Shopify's Restyle library. The component allows users to select options by tapping on the checkbox.

## Import

\`\`\`jsx
import {CheckBox} from 'path/to/Checkbox'
\`\`\`

## Props

### \`RestyleProps\`

The component accepts styling props from the Restyle library, including:

- \`spacing\`: Props for margin and padding.
- \`layout\`: Props for layout styling.

For detailed information about these props, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

### Props

| Prop           | Type                      | Description                                                           |
| -------------- | ------------------------- | --------------------------------------------------------------------- |
| \`checked\`      | \`boolean\`                 | Indicates whether the checkbox is checked or not.                      |
| \`onValueChange\`| \`(value: boolean) => void\`| Callback function called when the checkbox value changes.              |
| \`label\`        | \`string\`                  | Optional label text displayed next to the checkbox.                    |
| \`disabled\`     | \`boolean\`                 | If \`true\`, disables the checkbox interaction.                          |
| ...RestyleProps| RestyleProps               | Additional styling props from the Restyle library for custom styling.   |

## Usage

\`\`\`jsx
import React, { useState } from 'react';
import { CheckBox } from './path/to/CheckBox';
import { View } from 'react-native';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (value) => {
    setIsChecked(value);
    // additional logic
  };

  return (
    <View>
      <CheckBox
        checked={isChecked}
        onValueChange={handleCheckBoxChange}
        label="Enable Notifications"
        disabled={false}
        marginTop="m"
        marginRight="m"
      />
    </View>
  );
};

export default App;
\`\`\`

## Theming

The \`CheckBox\` component supports theming through the theme configuration in Restyle. Customize the checkbox appearance by defining styles in your theme.

\`\`\`js
const theme = {
  colors: {
    controlsBrand: '#007AFF',
    strokePrimary: '#CCCCCC',
    textPrimary: '#000000',
    // ... other theme properties
  },
  // define other theme properties like variants, spacing, etc.
};
\`\`\`

For more information on creating themes, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

---

This documentation provides an overview of the \`CheckBox\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the Restyle library and React Native components used.
`;

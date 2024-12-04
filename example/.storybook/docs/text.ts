export const TextDocs = `
# Text Component

This document describes the \`Text\` component, a customizable text component for React Native applications using Shopify's Restyle library. The component supports various styles defined in the theme.

## Import

\`\`\`jsx
import { Text } from './path/to/Text';
\`\`\`

## Props

### \`RestyleProps\`

The component accepts several styling props from the Restyle library, which include:

- \`variant\`: Defines the text variant based on the theme.
- \`spacing\`: Props for margin and padding.

For detailed information about these props, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

### \`Props\`

In addition to the Restyle props, the \`Text\` component also inherits all the standard props of a React Native \`Text\` component.

| Prop       | Type     | Description                                           |
|----------------|-----------------------|--------------------------|----------|---------------|
| \`variant\` | \`string\` | The text variant defined in the theme\`s \`textVariants\`. |

## Usage

\`\`\`jsx
import React from 'react';
import { Text } from './path/to/Text';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text variant="header">Header Text</Text>
      <Text variant="body" marginTop="m">Body Text with Margin</Text>
    </View>
  );
};

export default App;
\`\`\`

## Theming

The \`Text\` component supports theming through the \`variant\` prop. To define your own text variants, add them to your theme configuration in Restyle.

\`\`\`js
const theme = {
  textVariants: {
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'primary',
    },
    body: {
      fontSize: 16,
      color: 'text',
    },
    // add more variants as needed
  },
  // ... other theme properties
};
\`\`\`

For more information on creating themes, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).


This documentation provides an overview of the \`Text\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the Restyle library and React Native components used.
`;


export const CardDocs = `
# Card Component

This document describes the \`Card\` component, a customizable card component for React Native applications using Shopify's Restyle library. The component wraps content in a styled box, allowing for flexible layout and theming.

## Import

\`\`\`jsx
import { Card } from 'path/to/Card';
\`\`\`

## Props

### \`RestyleProps\`

The component accepts styling props from the Restyle library, including:

- \`spacing\`: Props for margin and padding.
- \`border\`: Props for border styling.
- \`backgroundColor\`: Props for background color styling.
- \`layout\`: Props for layout styling.
- \`variant\`: Variant props defined in the \`cardVariants\` theme.

For detailed information about these props, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

### Props

| Prop       | Type                     | Description                                                         |
| ---------- | ------------------------ | ------------------------------------------------------------------- |
| ...RestyleProps | RestyleProps           | Additional styling props from the Restyle library for custom styling. |

## Usage

\`\`\`jsx
import React from 'react';
import { View } from 'react-native';
import { Card } from './path/to/Card';

const App = () => {
  return (
    <View>
      <Card
        variant="defaults"
        marginTop="m"
        padding="m"
        borderRadius="m"
        backgroundColor="backgroundSecondary"
        alignSelf="flex-start"
      >
        {/* Content inside the card */}
      </Card>
    </View>
  );
};

export default App;
\`\`\`

## Theming

The \`Card\` component supports theming through the \`variant\` prop, defined in the \`cardVariants\` theme. Customize the card appearance by defining styles in your theme.

\`\`\`javascript
const theme = {
  cardVariants: {
    defaults: {
      padding: 'm',
      borderRadius: 'm',
      backgroundColor: 'backgroundSecondary',
      alignSelf: 'flex-start',
    },
    bordered: {
      borderWidth: 1,
      borderColor: 'strokeTertiary',
      backgroundColor: 'transparent',
    },
    // add more variants as needed
  },
  // define other theme properties like colors, spacing, etc.
};
\`\`\`

For more information on creating themes, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

---

This documentation provides an overview of the \`Card\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the Restyle library and React Native components used.
`;

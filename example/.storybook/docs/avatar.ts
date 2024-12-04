export const AvatarDocs = `
# Avatar Component

This document describes the \`Avatar\` component, a customizable avatar component for React Native applications using Shopify's Restyle library. The component supports loading states, error handling, and fallback icons.

## Import

\`\`\`jsx
import { Avatar } from './path/to/Avatar';
\`\`\`

## Props

### \`RestyleProps\`

The component accepts several styling props from the Restyle library, which are composed using the \`composeRestyleFunctions\` utility. These props include:

- \`spacing\`: Props for margin and padding.
- \`layout\`: Props for layout styling.

For detailed information about these props, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

### \`Props\`

| Prop          | Type     | Description                                                 |
| ------------- | -------- | ----------------------------------------------------------- |
| \`imageSource\` | \`string\` | The source URL of the image to be displayed.                |
| \`size\`       | \`number\` | The size of the avatar. Defaults to 88 if not specified.    |

## Usage

\`\`\`jsx
import React from 'react';
import { Avatar } from './path/to/Avatar';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Avatar imageSource="https://example.com/avatar.jpg" size={100} />
    </View>
  );
};

export default App;
\`\`\`

### Example with Loading and Error States

\`\`\`jsx
import React, { useState, useEffect } from 'react';
import { Avatar } from './path/to/Avatar';
import { View, Button } from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState("https://example.com/avatar.jpg");

  useEffect(() => {
    // Simulate an image load error after 5 seconds
    const timer = setTimeout(() => {
      setImageSource("https://example.com/invalid-avatar.jpg");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Avatar imageSource={imageSource} size={100} />
      <Button title="Reload" onPress={() => setImageSource("https://example.com/avatar.jpg")} />
    </View>
  );
};

export default App;
\`\`\`

## Theming

The \`Avatar\` component supports theming through the \`useAppTheme\` hook. Ensure your theme is configured correctly in Restyle.

\`\`\`js
const theme = {
  colors: {
    controlsTertiary: '#f0f0f0',
    graphicSecondary: '#cccccc',
    // ... other theme properties
  },
};
\`\`\`

For more information on creating themes, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

---

This documentation provides an overview of the \`Avatar\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the Restyle library and React Native components used.
`;

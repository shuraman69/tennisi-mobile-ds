export const SwitchDocs = `

# Switch Component

This document describes the \`Switch\` component, a customizable switch component for React Native applications.

## Import

\`\`\`jsx
import { Switch } from 'path/to/Switch';
\`\`\`


### \`Props

| Prop           | Type                 | Description                                             |
| -------------- | -------------------- | ------------------------------------------------------- |
| \`description\` | \`string\`           | Optional description text displayed next to the switch. |
| ...SwitchProps | \`SwitchProps\`      | Additional props from \`SwitchProps\`, see React Native documentation for details. |

## Usage

\`\`\`jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from './path/to/Switch';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        description="Enable notifications"
      />
    </View>
  );
};

export default App;
\`\`\`

## Theming

The appearance of the \`Switch\` component can be customized using the theme from \`useAppTheme\`. Customize the switch's colors and styles as per your application's theme configuration.

For more information on theming, refer to the \`useAppTheme\` hook documentation.


This documentation provides an overview of the \`Switch\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the React Native components used.
`;

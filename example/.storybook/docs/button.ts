export const ButtonDocs = `
# Button Component

This document describes the \`Button\` component, a customizable and themeable button for React Native applications using Shopify's Restyle library. The component supports various styles and states such as loading and disabled, and allows for the inclusion of an icon.

## Import

\`\`\`jsx
import { Button } from './path/to/Button';
\`\`\`



## Props

### \`RestyleProps\`

The component accepts several styling props from the Restyle library, which are composed using the \`composeRestyleFunctions\` utility. These props include:

- \`border\`: Props for border styling.
- \`backgroundColor\`: Props for background color styling.
- \`variant\`: Props for theming variants.

For detailed information about these props, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

### \`Props\`

| Prop           | Type                        | Description                                                                                 |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| \`label\`        | \`string\`                    | The text label of the button.                                                               |
| \`onPress\`      | \`() => void\`                | Callback function to be called when the button is pressed.                                  |
| \`touchableProps\` | \`TouchableOpacityProps\`    | Additional props for the \`TouchableOpacity\` component.                                       |
| \`icon\`         | \`React.ReactElement\`        | An optional icon to be displayed alongside the button label.                                |
| \`loading\`      | \`boolean\`                   | If \`true\`, shows a loading indicator located to the right of the label.                                  |
| \`disabled\`     | \`boolean\`                   | If \`true\`, disables the button.                                                             |



## Usage

\`\`\`jsx
import React from 'react';
import { Button } from './path/to/Button';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Button 
        label="Click Me" 
        onPress={() => console.log('Button Pressed')} 
        loading={false} 
        disabled={false}
      />
    </View>
  );
};

export default App;
\`\`\`



### Example with Icon and Loading State

\`\`\`jsx
import React from 'react';
import { Button } from './path/to/Button';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  return (
    <View>
      <Button 
        label="Save" 
        onPress={() => console.log('Button Pressed')} 
        icon={<MaterialIcons name="save" size={24} />} 
        loading={true}
        variant="primary"
      />
    </View>
  );
};

export default App;
\`\`\`



### Example with Custom TouchableOpacity Props

\`\`\`jsx
import React from 'react';
import { Button } from './path/to/Button';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Button 
        label="Submit" 
        onPress={() => console.log('Button Pressed')} 
        touchableProps={{ activeOpacity: 0.7 }} 
        variant="secondary"
      />
    </View>
  );
};

export default App;
\`\`\`



## Theming

The \`Button\` component supports theming through the \`variant\` prop. To define your own variants, add them to your theme configuration in Restyle.

\`\`\`js
const theme = {
  // ... other theme properties
  buttonVariants: {
    primary: {
      backgroundColor: 'primary',
      borderRadius: 's',
      padding: 'm',
    },
    secondary: {
      backgroundColor: 'secondary',
      borderRadius: 's',
      padding: 'm',
    },
    // add more variants as needed
  },
};
\`\`\`

For more information on creating themes, please refer to the [Restyle documentation](https://github.com/Shopify/restyle).

---

This documentation provides an overview of the \`Button\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the Restyle library and React Native components used.
`;

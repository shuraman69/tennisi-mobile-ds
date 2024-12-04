export const RadioGroupDocs = `

# RadioGroup Component

This document describes the \`RadioGroup\` component, a customizable radio button group component for React Native applications.

## Import

\`\`\`jsx
import {RadioGroup} from 'path/to/RadioGroup'
\`\`\`

## Types

### \`RadioButtonItem\`

\`\`\`typescript
type RadioButtonItem = {
  value: string;
  label: string;
  disabled?: boolean;
};
\`\`\`

## \`Props


| Prop               | Type                  | Description                                                          |
| ------------------ | --------------------- | -------------------------------------------------------------------- |
| \`buttons\`        | \`RadioButtonItem[]\` | Array of objects representing radio button items.                     |
| \`selectedId\`     | \`string\`            | ID of the currently selected radio button.                            |
| \`onSelectedIdChange\` | \`(id: string) => void\` | Callback function called when a radio button is selected.              |
| \`row\`            | \`boolean\`           | If \`true\`, arranges radio buttons horizontally (default is vertical).|

## Usage

\`\`\`jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioGroup } from './path/to/RadioGroup';

const App = () => {
  const [selectedId, setSelectedId] = useState('');

  const handleSelectedIdChange = (id) => {
    setSelectedId(id);
    // additional logic
  };

  return (
    <View>
      <RadioGroup
        buttons={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        selectedId={selectedId}
        onSelectedIdChange={handleSelectedIdChange}
        row={false}
      />
    </View>
  );
};

export default App;
\`\`\`

## Theming

The appearance of the \`RadioGroup\` component can be customized using the theme from \`useAppTheme\`. Customize the radio buttons' colors and styles as per your application's theme configuration.

For more information on theming, refer to the \`useAppTheme\` hook documentation.


This documentation provides an overview of the \`RadioGroup\` component and its usage. For more advanced configurations and examples, refer to the official documentation of the React Native components used.
`;

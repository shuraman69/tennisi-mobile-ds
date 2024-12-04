export const CodeInputDocs = `

# CodeInput Component

The \`CodeInput\` component provides a customizable input field specifically designed for entering codes (e.g., 2FA codes, pin codes, etc.). It supports a flexible number of cells, theming, animations, and error handling.

## Import

\`\`\`jsx
import {CodeInput} from './path-to-component'
\`\`\`

## Props

| Prop          | Type                   | Description                                                                              |
| ------------- | ---------------------- | ---------------------------------------------------------------------------------------- |
| \`value\`      | \`string\`             | The current input value (e.g., the entered code).                                         |
| \`onChange\`   | \`(value: string) => void\` | Callback function triggered when the input value changes.                                 |
| \`disabled\`   | \`boolean\`            | If true, the input is disabled, and the cells are not editable.                           |
| \`error\`      | \`boolean\`            | If true, an error style is applied to the cells (e.g., for invalid codes).                |
| \`message\`    | \`string\`             | Optional message displayed below the input (e.g., error messages or instructions).        |
| \`buttonTitle\`| \`string\`             | Optional button label, displayed under the input.                                         |
| \`onButtonPress\` | \`() => void\`     | Optional callback function for the button's onPress event.                                |

## Usage

\`\`\`jsx
import React, { useState } from 'react';
import { CodeInput } from './path/to/CodeInput';

const Example = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <CodeInput
      value={code}
      onChange={handleCodeChange}
      error={false}
      message="Enter the 6-digit code"
      buttonTitle="Submit"
      onButtonPress={() => console.log('Code submitted:', code)}
    />
  );
};

export default Example;
\`\`\`

## Component Breakdown

### 1. **CodeInput**

The main component, \`CodeInput\`, renders the interactive input field consisting of a series of cells representing each digit of the code.

- The input is displayed using a Pressable container. Once pressed, it focuses the hidden \`TextInput\` element.
- It supports a maximum number of cells (in this case, 6), controlled by the constant \`CELLS_COUNT\`.
- The styling and theming are dynamically applied based on focus state, errors, and disabled state.
- The \`TextInput\` element captures the input and controls the visible values in each cell.

### 2. **Cell**

- Each cell of the input field is rendered by the \`Cell\` component.
- Cells visually represent the individual characters of the code, with borders that change colors based on the focus, error, or disabled state.
- When focused, an animated caret appears inside the active cell.
- The \`Cell\` component uses \`ZoomIn\` and \`ZoomOut\` animations from \`react-native-reanimated\` to animate character entry and caret behavior.

---

This documentation provides an overview of the \`CodeInput\` component's functionality, theming, and usage. For more advanced configurations, refer to the full API documentation.
`;

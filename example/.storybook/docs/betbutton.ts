export const BetButtonDocs = `

# \`BetButton Component

The \`BetButton\` component is a customizable button used for placing bets, with optional markers and dynamic theming.

## Import

\`\`\`jsx
import { BetButton } from './path/to/BetButton';
\`\`\`

## Props

### \`RestyleProps\`


This component uses Restyle for styling. The primary Restyle props include:

- \`BackgroundColorProps\`: Configures the background color.
- \`VariantProps\`: Configures the button variant from the betButtonVariants in the theme.

### Custom Props

| Prop      | Type                                   | Description                                                                              |
| --------- | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| \`title\` | \`string\`                             | The title text displayed on the button.                                                  |
| \`value\` | \`string\`                             | The value text displayed on the button.                                                  |
| \`noInfo\`| \`boolean\`                            | If true, hides the info text and shows a placeholder (e.g., "---").                       |
| \`active\`| \`boolean\`                            | If true, applies the active style to the button.                                         |
| \`disabled\`| \`boolean\`                         | If true, the button is disabled and appears with reduced opacity.                        |

## Usage

\`\`\`jsx
import React from 'react';
import { BetButton } from './path/to/BetButton';

const Example = () => (
  <BetButton
    title="Team A"
    value="1.75"
    active={true}
    onPress={() => console.log('Bet placed!')}
  />
);

export default Example;
\`\`\`

## Theming

The \`BetButton\` component utilizes theming via Restyle. It uses the \`betButtonVariants\` defined in the theme and dynamically adjusts styles based on the \`active\` and \`disabled\` states. Custom markers can also be displayed using hooks provided by the \`useBetButtonMarker\` function.

### Example of \`betButtonVariants\`

In your theme definition:

\`\`\`javascript
const theme = {
  betButtonVariants: {
    default: {
      backgroundColor: 'backgroundSecondary',
      padding: 'm',
      borderRadius: 'm',
    },
    active: {
      backgroundColor: 'backgroundAlternative',
    },
  },
};
\`\`\`


This documentation provides a summary of the \`BetButton\` component's functionality and usage. For more advanced configurations, refer to the complete API reference and theming guide.
`;

import type { Preview } from '@storybook/react';
import { Box, TennisiV1Dark, TennisiV1Light, ToastWrapper } from 'react-native-tennisi-mobile-ds';
import { ThemeProvider } from '@shopify/restyle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: {type: 'radio'},
    },
  },
  args: {
    theme: 'dark',
  },
  decorators: [
    (Story, {args}) => {

      const theme = args?.theme === 'dark' ? TennisiV1Dark : TennisiV1Light;
      return (
        <ThemeProvider theme={theme}>
          <ToastWrapper>
          <Box
            flex={1}
            style={{backgroundColor: theme.colors.backgroundPrimary}}>
            <Story />
          </Box>
          </ToastWrapper>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

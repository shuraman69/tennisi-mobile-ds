import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {TennisiV1Light, BetButton, Box} from 'react-native-tennisi-mobile-ds';
import {BetButtonDocs} from '../../docs';

const BetButtonMeta: Meta<typeof BetButton> = {
  title: 'BetButton',
  component: BetButton,
  parameters: {
    notes: BetButtonDocs,
  },
  argTypes: {
    variant: {
      options: Object.keys(TennisiV1Light.betButtonVariants),
      control: {type: 'radio'},
    },
  },
  args: {
    title: 'Title',
    value: '0.12',
    variant: 'default',
    disabled: false,
    active: false,
    noInfo: false,
  },
  decorators: [
    Story => (
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Box>
          <Story />
        </Box>
      </View>
    ),
  ],
};

export default BetButtonMeta;

export const Basic: StoryObj<typeof BetButton> = {};

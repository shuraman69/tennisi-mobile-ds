import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Button, ToastService} from 'react-native-tennisi-mobile-ds';
import {ToastDocs} from '../../docs';

const ToastMeta: Meta<typeof Button> = {
  title: 'Toast',
  component: Button,
  parameters: {
    notes: ToastDocs,
  },
  args: {
    label: 'Toast',
  },
  decorators: [
    Story => (
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          flex: 1,
        }}>
        <Story />
      </View>
    ),
  ],
  render: function Render(args) {
    return <Button {...args} />;
  },
};

export default ToastMeta;

export const Success: StoryObj<typeof Button> = {
  args: {
    onPress: () =>
      ToastService.success({text1: 'Success', text2: 'Success subtitle'}),
  },
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    onPress: () =>
      ToastService.warning({text1: 'Warning', text2: 'Warning subtitle'}),
  },
};

export const Error: StoryObj<typeof Button> = {
  args: {
    onPress: () =>
      ToastService.error({text1: 'Error', text2: 'Error subtitle'}),
  },
};

export const Default: StoryObj<typeof Button> = {
  args: {
    onPress: () =>
      ToastService.default({text1: 'Default', text2: 'Default subtitle'}),
  },
};

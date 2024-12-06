import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {useArgs} from '@storybook/preview-api';
import {NotificationAlert} from 'tennisi-mobile-ds';

const NotificationAlertMeta: Meta<typeof NotificationAlert> = {
  title: 'NotificationAlert',
  component: NotificationAlert,
  parameters: {
    notes: '',
  },
  args: {
    show: true,
    title: 'Title',
    subtitle: 'Subtitle',
    showIcon: true,
    button1Text: 'Button 1',
    button2Text: 'Button 2',
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
    const [{}, updateArgs] = useArgs();

    function onClose() {
      updateArgs({show: false});
    }
    return <NotificationAlert {...args} onClose={onClose} />;
  },
};

export default NotificationAlertMeta;

export const Basic: StoryObj = {};

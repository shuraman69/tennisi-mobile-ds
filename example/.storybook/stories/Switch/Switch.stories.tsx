import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {useArgs} from '@storybook/preview-api';
import {Switch} from 'tennisi-mobile-ds';
const SwitchMeta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  parameters: {
    notes: SwitchDocs,
  },
  args: {
    value: false,
    description: 'Switch description',
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

    function onValueChange(value: boolean) {
      updateArgs({value});
    }

    return <Switch {...args} onValueChange={onValueChange} />;
  },
};

import {SwitchDocs} from '../../docs';

export default SwitchMeta;

export const Basic: StoryObj = {};

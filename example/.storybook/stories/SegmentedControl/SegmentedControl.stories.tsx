import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import { SegmentedControl } from 'tennisi-mobile-ds';
import { useArgs } from '@storybook/preview-api';

const SegmentedControlMeta: Meta<typeof SegmentedControl> = {
  title: 'SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    values: {
      options: [
        ['One'],
        ['One', 'Two'],
        ['One', 'Two', 'Three'],
        ['One', 'Two', 'Three', 'Four'],
      ],
      control: {type: 'radio'},
    },
    variant: {
      options: ['s', 'l'],
      control: {type: 'radio'},
    },
  },
  args: {
    variant: 's',
    selectedIndex: 0,
    loading: false,
    values:  ['One'],
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
    const [{values}, updateArgs] = useArgs();

    function onValueChange(value: boolean) {
      const index = values.indexOf(value);
      updateArgs({selectedIndex: index });
    }

    return <SegmentedControl {...args}  onValueChange={onValueChange} />;
  },
};

export default SegmentedControlMeta;

export const Basic: StoryObj<typeof SegmentedControl> = {};

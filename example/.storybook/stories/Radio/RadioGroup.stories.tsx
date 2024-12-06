import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {useArgs} from '@storybook/preview-api';
import {RadioGroup} from 'react-native-tennisi-mobile-ds';
import {RadioGroupDocs} from '../../docs';

const RadioGroupMeta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    notes: RadioGroupDocs,
  },
  args: {
    selectedId: '0',
    row: true,
    buttons: [
      {
        label: 'lorem ipsum lorem',
        value: 'option1',
        disabled: false,
      },
      {label: 'Option 2', value: 'option2', disabled: true},
      {label: 'Option 3', value: 'option3', disabled: false},
    ],
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
        <Story />
      </View>
    ),
  ],
  render: function Render(args) {
    const [{}, updateArgs] = useArgs();

    function onSelectedChange(id: string) {
      updateArgs({selectedId: id});
    }

    return <RadioGroup {...args} onSelectedIdChange={onSelectedChange} />;
  },
};

export default RadioGroupMeta;

export const Basic: StoryObj = {};

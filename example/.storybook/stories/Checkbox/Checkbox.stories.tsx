import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {useArgs} from '@storybook/preview-api';
import {CheckBox} from 'react-native-tennisi-mobile-ds';
import {CheckboxDocs} from '../../docs';

const CheckboxMeta: Meta<typeof CheckBox> = {
  title: 'Checkbox',
  component: CheckBox,
  parameters: {
    notes: CheckboxDocs,
  },
  argTypes: {},
  args: {
    checked: true,
    label: 'Hello world',
    disabled: false,
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
    const [{checked}, updateArgs] = useArgs();

    function onPress() {
      updateArgs({checked: !checked});
    }

    return <CheckBox {...args} onValueChange={onPress} />;
  },
};

export default CheckboxMeta;

export const Basic: StoryObj = {};

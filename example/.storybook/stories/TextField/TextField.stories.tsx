import {ScrollView, View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {
  Box,
  DateMaskedTextField,
  PhoneMaskedTextField,
  Textarea,
  TextField,
} from 'tennisi-mobile-ds';
import {TextFieldDocs} from '../../docs';
import {useArgs} from '@storybook/preview-api';

const TextFieldMeta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  parameters: {
    notes: TextFieldDocs,
  },
  args: {
    value: '',
    label: 'Some label',
    placeholder: 'Placeholder',
    description: 'Some input description',
    error: false,
  },
  decorators: [
    Story => (
      <ScrollView
        contentContainerStyle={{minHeight: '100%', justifyContent: 'center'}}>
        <Box justifyContent={'center'} px={'x4'}>
          <Story />
        </Box>
      </ScrollView>
    ),
  ],
  render: function Render(args) {
    const [{value}, updateArgs] = useArgs();

    function onChangeText(text: string) {
      updateArgs({value: text});
    }

    return <TextField {...args} onChangeText={onChangeText} />;
  },
};

export default TextFieldMeta;

export const Basic: StoryObj<typeof TextField> = {};
export const PhoneMasked: StoryObj<typeof PhoneMaskedTextField> = {
  args: {
    placeholder: 'Номер телефона',
    label: 'Укажите номер телефона',
  },
  render: function Render(args) {
    const [{value}, updateArgs] = useArgs();

    function onChangeText(text: string) {
      updateArgs({value: text});
    }

    return <PhoneMaskedTextField {...args} onChangeText={onChangeText} />;
  },
};
export const DateMasked: StoryObj<typeof DateMaskedTextField> = {
  args: {
    placeholder: 'DD/MM/YYYY',
    label: 'Дата рождения',
  },
  render: function Render(args) {
    const [{value}, updateArgs] = useArgs();

    function onChangeText(text: string) {
      updateArgs({value: text});
    }

    return <DateMaskedTextField {...args} onChangeText={onChangeText} />;
  },
};

export const TextArea: StoryObj<typeof TextField> = {
  args: {
    placeholder: 'Text area placeholder',
    label: 'This is a text area',
  },
  render: function Render(args) {
    const [{value}, updateArgs] = useArgs();

    function onChangeText(text: string) {
      updateArgs({value: text});
    }

    return <Textarea {...args} onChangeText={onChangeText} />;
  },
};

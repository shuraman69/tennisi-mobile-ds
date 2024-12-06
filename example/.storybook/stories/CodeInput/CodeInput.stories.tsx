import {ScrollView} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Box, CodeInput} from 'tennisi-mobile-ds';
import {CodeInputDocs} from '../../docs';
import {useArgs} from '@storybook/preview-api';

const CodeInputMeta: Meta<typeof CodeInput> = {
  title: 'CodeInput',
  component: CodeInput,
  parameters: {
    notes: CodeInputDocs,
  },
  args: {
    value: '',
    message: 'lorem ipsum ipsum ipsum',
    buttonTitle: 'Button action',
    error: false,
    disabled: false,
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

    return <CodeInput {...args} onChange={onChangeText} />;
  },
};

export default CodeInputMeta;

export const Basic: StoryObj<typeof CodeInput> = {};

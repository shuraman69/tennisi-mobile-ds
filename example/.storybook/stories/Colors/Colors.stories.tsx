import {ScrollView} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Button} from 'react-native-tennisi-mobile-ds';
import {ColorComponent} from './ColorComponent';

const MyButtonMeta: Meta<typeof ColorComponent> = {
  title: 'Colors',
  component: ColorComponent,
  decorators: [
    (Story, {args}) => (
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 20,
        }}>
        <Story />
      </ScrollView>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof Button> = {};

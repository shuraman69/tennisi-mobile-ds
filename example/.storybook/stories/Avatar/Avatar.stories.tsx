import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {AvatarDocs} from '../../docs';
import { Avatar } from 'react-native-tennisi-mobile-ds';

const AvatarMeta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    notes: AvatarDocs,
  },
  argTypes: {
    imageSource: {
      control: 'radio',
      options: ['NoImage', 'WithImage'],
      mapping: {
        NoImage: undefined,
        WithImage:
          'https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG',
      },
    },
  },
  args: {},
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
};

export default AvatarMeta;

export const Basic: StoryObj<typeof Avatar> = {};

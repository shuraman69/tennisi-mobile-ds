import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Box, Text, TennisiV1Light} from 'react-native-tennisi-mobile-ds';
import {TextDocs} from '../../docs';

const textVariants = Object.keys(TennisiV1Light.textVariants);

const TextMeta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  parameters: {
    notes: TextDocs,
  },
  argTypes: {},
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
  decorators: [
    (Story, {args}) => (
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Story />
        {!!args.variant && (
          <Box
            alignSelf={'flex-start'}
            mt={'x3'}
            backgroundColor={'backgroundSecondary'}
            padding={'x3'}
            borderRadius={'m'}>
            <Text>
              {JSON.stringify(
                TennisiV1Light.textVariants[args.variant],
                null,
                3,
              )}
            </Text>
          </Box>
        )}
      </View>
    ),
  ],
};

export default TextMeta;

export const Header: StoryObj<typeof Text> = {
  argTypes: {
    variant: {
      control: 'radio',
      options: textVariants.filter(v => v.includes('header')),
    },
  },
};

export const Default: StoryObj<typeof Text> = {
  argTypes: {
    variant: {
      control: 'radio',
      options: textVariants.filter(v => v.includes('default')),
    },
  },
};

export const Paragraph: StoryObj<typeof Text> = {
  argTypes: {
    variant: {
      control: 'radio',
      options: textVariants.filter(v => v.includes('p-')),
    },
  },
};

import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Card} from 'react-native-tennisi-mobile-ds';
import {CardTemplate} from './CardTemplate';
import {CardDocs} from '../../docs';

const CardMeta: Meta<typeof CardTemplate> = {
  title: 'Card',
  component: CardTemplate,
  parameters: {
    notes: CardDocs,
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

export default CardMeta;

export const Basic: StoryObj<typeof Card> = {};
export const Bordered: StoryObj<typeof Card> = {
  args: {
    variant: 'bordered',
  },
};

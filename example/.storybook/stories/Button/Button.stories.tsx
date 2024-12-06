import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {TennisiV1Light, Button, CaseIcon, CheckIcon, FireIcon} from 'tennisi-mobile-ds';
import {useArgs} from '@storybook/preview-api';
import {ButtonDocs} from '../../docs';

const buttonVariants = Object.keys(TennisiV1Light.buttonVariants);

const MyButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    notes: ButtonDocs,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants,
    },
  },
  args: {
    label: 'Hello world',
    variant: 'accent-l',
    disabled: false,
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
};

export default MyButtonMeta;

export const Accent: StoryObj<typeof Button> = {
  argTypes: {
    variant: {
      control: 'radio',
      options: buttonVariants.filter(variant => variant.includes('accent')),
    },
  },
};
export const Secondary: StoryObj<typeof Button> = {
  argTypes: {
    variant: {
      control: 'radio',
      options: buttonVariants.filter(variant => variant.includes('secondary')),
    },
  },
  args: {
    variant: 'secondary-l',
  },
};
export const Outline: StoryObj<typeof Button> = {
  argTypes: {
    variant: {
      control: 'radio',
      options: buttonVariants.filter(variant => variant.includes('outline')),
    },
  },
  args: {
    variant: 'outline-l',
  },
};
export const Loading: StoryObj<typeof Button> = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(TennisiV1Light.buttonVariants),
    },
  },
  args: {
    loading: false,
    label: 'Loading button',
  },
  render: function Render(args) {
    const [{loading}, updateArgs] = useArgs();

    function onPress() {
      updateArgs({loading: true});
      setTimeout(() => {
        updateArgs({loading: false});
      }, 3000);
    }

    return <Button {...args} onPress={onPress} />;
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  argTypes: {
    icon: {
      control: 'radio',
      options: ['Fire', 'Check', 'Case'],
      mapping: {
        Fire: <FireIcon key={'1'} />,
        Case: <CaseIcon key={'1'} />,
        Check: <CheckIcon key={'1'} />,
      },
    },
  },
  args: {
    loading: false,
    label: 'Button with icon',
  },
};

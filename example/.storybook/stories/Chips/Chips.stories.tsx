import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {Button, Chips, ChipProps} from 'tennisi-mobile-ds';
import {useArgs} from '@storybook/preview-api';

function makeLabel(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const ChipsMeta: Meta<typeof Chips> = {
  title: 'Chips',
  component: Chips,
  // parameters: {
  // notes: ChipsDocs,
  // },
  argTypes: {
    data: {
      type: 'symbol',
    },
  },
  args: {
    data: [
      {label: 'Chip 1'},
      {label: 'Chip 2'},
      {label: 'Chip 3'},
      {label: 'Chip 4'},
    ],
    loading: false,
    loadingItemsCount: 4,
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

export default ChipsMeta;

export const Basic: StoryObj<typeof Chips> = {
  render: props => {
    const [{data}, updateArgs] = useArgs();
    const onAddChip = () => {
      const newChip = {
        label: makeLabel(Math.round((Math.random() + 0.1) * 10)),
        disabled: !!Math.round(Math.random()),
      };
      updateArgs({data: [...data, newChip]});
    };
    const onChipPress = (label: string) => {
      updateArgs({
        data: data.filter((chip: ChipProps) => chip.label !== label),
      });
    };
    return (
      <>
        <Chips {...props} onChipPress={onChipPress} />
        <Button
          variant={'accent-s'}
          alignSelf={'flex-start'}
          label="Add chip"
          mt={'x4'}
          onPress={onAddChip}
        />
      </>
    );
  },
};

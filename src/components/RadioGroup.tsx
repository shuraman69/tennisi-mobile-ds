import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import RNRadioGroup, {
  RadioButtonProps,
} from 'react-native-radio-buttons-group';
import { useAppTheme } from '../mds';
import { RadioGroupProps, RadioButtonItem } from '../types';
import { Text } from './Text';
import { TestIds } from '../config';

const defaultButtons = [] as RadioButtonItem[];
export const RadioGroup = ({
  buttons = defaultButtons,
  selectedId,
  onSelectedIdChange,
  row,
}: RadioGroupProps) => {
  const { colors } = useAppTheme();
  const radioButtons: RadioButtonProps[] = useMemo(
    () =>
      buttons.map(
        (item, index) => ({
          id: index.toString(), // acts as primary key, should be unique and non-empty string
          ...item,
          label: (
            <Text ml={'x2'} variant={'p-m'} fontWeight={'500'}>
              {item.label}
            </Text>
          ),
          size: 20,
          borderSize: 1,
          color: colors.controlsBrand,
        }),
        [colors]
      ),
    [buttons]
  );
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
  });
  return (
    <RNRadioGroup
      testID={TestIds.RADIO_GROUP}
      containerStyle={styles.container}
      radioButtons={radioButtons}
      onPress={onSelectedIdChange}
      selectedId={selectedId}
      layout={row ? 'row' : 'column'}
    />
  );
};

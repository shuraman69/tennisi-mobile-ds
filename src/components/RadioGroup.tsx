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
  cards,
}: RadioGroupProps) => {
  const { colors, spacing, borderRadii } = useAppTheme();

  const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      width: '100%',
    },
    cardButton: {
      padding: spacing.x3,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: borderRadii.xl,
      width: '100%',
    },
    cardButtonSelected: {
      borderWidth: 1,
      padding: spacing.x3 - 1,
      borderColor: colors.controlsBrand,
    },
  });

  const radioButtons: RadioButtonProps[] = useMemo(
    () =>
      buttons.map(
        (item, index) => ({
          id: index.toString(), // acts as primary key, should be unique and non-empty string
          ...item,
          label: (
            <Text
              ml={'x2'}
              variant={cards ? 'p-l-semibold' : 'p-m'}
              fontWeight={'500'}
            >
              {item.label}
            </Text>
          ),
          size: 20,
          borderSize: 1,
          color: colors.controlsBrand,
          containerStyle: [
            cards && styles.cardButton,
            cards &&
              selectedId === index.toString() &&
              styles.cardButtonSelected,
          ],
        }),
        [colors]
      ),
    [buttons, cards, selectedId]
  );

  return (
    <RNRadioGroup
      testID={TestIds.RADIO_GROUP}
      containerStyle={styles.container}
      radioButtons={radioButtons}
      onPress={onSelectedIdChange}
      selectedId={selectedId}
      layout={row && !cards ? 'row' : 'column'}
    />
  );
};

import { cloneElement, memo, ReactElement } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TennisiTheme, useAppTheme } from '../mds';
import { getRestyleProps, isEqualJson } from '../utils';
import { Constants } from '../config';
import { Box } from './Box';
import { Card } from './Card';
import { Text } from './Text';
import { SvgGrayFilter } from './SvgGrayFilter';

export const TabItemBig = memo(
  ({
    title,
    icon,
    color,
    selected,
    onPress,
  }: {
    title: string;
    icon: ReactElement;
    color: keyof TennisiTheme['colors'];
    selected: boolean;
    onPress: () => void;
  }) => {
    const theme = useAppTheme();
    const cardProps = getRestyleProps<typeof Card>({
      variant: 'bordered',
      backgroundColor: 'controlsTertiary',
      borderColor: color,
      borderWidth: selected ? 1 : 0,
      marginBottom: 'x1',
      padding: 'x3',
      overflow: 'hidden',
      borderRadius: 'm',
      alignItems: 'center',
      justifyContent: 'center',
      width: Constants.TAB_ITEM.BIG_SIZE,
      height: Constants.TAB_ITEM.BIG_SIZE,
    });
    return (
      <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={onPress}>
        <Box alignItems={'center'}>
          <Card {...cardProps}>
            {selected && (
              <LinearGradient
                colors={[theme.colors[color], 'transparent']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={StyleSheet.compose(StyleSheet.absoluteFillObject, {
                  opacity: 0.4,
                  borderRadius: theme.borderRadii.m,
                })}
              />
            )}

            {!!icon && (
              <SvgGrayFilter enabled={!selected} size={18}>
                {cloneElement(icon, { width: 18, height: 18 })}
              </SvgGrayFilter>
            )}
          </Card>
          <Text variant={'default-xs-semibold'}>{title}</Text>
        </Box>
      </TouchableOpacity>
    );
  },
  (p, n) => isEqualJson(p, n)
);

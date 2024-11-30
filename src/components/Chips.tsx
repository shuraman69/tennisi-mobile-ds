import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  FadeIn,
  LinearTransition,
  ZoomOut,
} from 'react-native-reanimated';
import { Skeleton } from './Skeleton';
import { isEqual } from 'lodash';
import { Box } from './Box';
import { Text } from './Text';
import { Row } from './Row';
import { HorizontalSlider } from './HorizontalSlider';
import { CloseBigIcon } from '../icons';
import { useAppTheme } from '../mds';
import { getRestyleProps } from '../utils';
import { ChipProps, ChipsRowProps } from '../types';
import { TestIds } from '../config';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const Chips = memo(
  ({
    data,
    onChipPress,
    disabled,
    loading,
    loadingItemsCount = 4,
  }: ChipsRowProps) => {
    const theme = useAppTheme();
    const renderItem = useCallback(
      (chipData: ChipsRowProps['data'][number], index: number) => (
        <AnimatedBox
          testID={TestIds.CHIPS.ITEM}
          key={chipData.label}
          mr={'x1'}
          layout={LinearTransition.delay(200)}
          entering={FadeIn.delay(25 * (index + 1))}
          exiting={ZoomOut}
        >
          <Chip
            {...chipData}
            onPress={onChipPress}
            disabled={disabled ?? chipData.disabled}
          />
        </AnimatedBox>
      ),
      [data, disabled]
    );

    if (loading) {
      return (
        <Box testID={TestIds.CHIPS.LOADING}>
          <Row>
            {new Array(loadingItemsCount).fill(0).map((_, index) => (
              <Box
                key={index}
                testID={TestIds.CHIPS.LOADING_ITEM}
                marginRight={'x2'}
              >
                <Skeleton
                  width={60}
                  height={24}
                  style={{ borderRadius: theme.borderRadii.s }}
                />
              </Box>
            ))}
          </Row>
        </Box>
      );
    }

    return <HorizontalSlider data={data} renderItem={renderItem} />;
  },
  (p, n) => isEqual(p, n)
);

export const Chip = memo(
  ({ label, onPress, disabled, showCloseButton = true }: ChipProps) => {
    const theme = useAppTheme();
    const containerProps = getRestyleProps<typeof Box>({
      backgroundColor: disabled ? 'controlsDisabled' : 'controlsTertiary',
      alignSelf: 'flex-start',
      py: 'x1',
      px: 'x2',
      borderRadius: 's',
    });
    const labelProps = getRestyleProps<typeof Text>({
      variant: 'p-s-semibold',
      color: disabled ? 'textDisabled' : 'textPrimary',
    });

    return (
      <TouchableOpacity onPress={() => onPress?.(label)} disabled={disabled}>
        <Box {...containerProps}>
          <Row>
            <Text {...labelProps}>{label}</Text>
            {showCloseButton && (
              <CloseBigIcon
                testID={TestIds.CHIPS.CLOSE_BUTTON}
                color={
                  disabled
                    ? theme.colors.textDisabled
                    : theme.colors.textPrimary
                }
                width={16}
                style={{
                  marginRight: -theme.spacing.xs,
                  marginLeft: theme.spacing.x1,
                }}
              />
            )}
          </Row>
        </Box>
      </TouchableOpacity>
    );
  },
  (p, n) => isEqual(p, n)
);

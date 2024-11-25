import { memo, useCallback, useRef, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  LayoutChangeEvent,
  Pressable,
} from 'react-native';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { isEqual } from 'lodash';
import { useAppTheme } from '../mds';
import { getRestyleProps, isEqualJson } from '../utils';
import { TestIds } from '../config';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const CodeInput = memo(
  ({
    value,
    onChange,
    disabled,
    error,
    message,
    buttonTitle,
    onButtonPress,
    cellsCount = 6,
  }: {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    buttonTitle?: string;
    onButtonPress?: () => void;
    cellsCount?: number;
  }) => {
    const [containerSize, setContainerSize] = useState(0);
    const theme = useAppTheme();
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<TextInput>(null);
    const onContainerLayout = useCallback(
      (event: LayoutChangeEvent) =>
        setContainerSize(event.nativeEvent.layout.width),
      []
    );

    const focus = useCallback(() => {
      ref.current?.focus();
      setIsFocused(true);
    }, []);
    const blur = useCallback(() => setIsFocused(false), []);
    const cells = new Array(cellsCount).fill(0);
    const onTextChange = useCallback((textValue: string) => {
      if (textValue.length <= cellsCount) {
        onChange(textValue);
      }
    }, []);
    const styles = StyleSheet.create({
      container: {
        borderRadius: theme.borderRadii.xl,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      textInputContainer: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'transparent',
      },
    });
    return (
      <Box>
        <Pressable
          onPress={focus}
          disabled={disabled}
          testID={TestIds.CODE_INPUT.CELLS_CONTAINER}
        >
          <Box style={styles.container} onLayout={onContainerLayout}>
            {cells.map((_, index) => (
              <Cell
                value={value[index] || null}
                noBorder={index === cellsCount - 1}
                size={containerSize / cellsCount}
                active={index === value.length && isFocused}
                key={index}
                error={error}
                disabled={disabled}
              />
            ))}
            <Box style={styles.textInputContainer}>
              <TextInput
                ref={ref}
                onBlur={blur}
                keyboardType={'number-pad'}
                style={{ height: 0, color: 'transparent' }}
                caretHidden
                value={value}
                onChangeText={onTextChange}
                editable={!disabled}
                returnKeyType={'done'}
                testID={TestIds.CODE_INPUT.TEXT_INPUT}
              />
            </Box>
          </Box>
        </Pressable>
        {(!!message || !!buttonTitle) && (
          <Box
            alignItems={'center'}
            maxWidth={'80%'}
            alignSelf={'center'}
            mt={'x3'}
          >
            {!!message && (
              <Text
                variant={'default-l-semibold'}
                textAlign={'center'}
                mb={'x3'}
                color={error ? 'strokeError' : 'textPrimary'}
              >
                {message}
              </Text>
            )}
            {!!buttonTitle && (
              <Box minWidth={'85%'}>
                <Button
                  variant={'secondary-m'}
                  label={buttonTitle}
                  onPress={onButtonPress}
                />
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  },
  (p, n) => isEqual(p, n)
);

const Cell = memo(
  ({
    value,
    size,
    active,
    noBorder,
    error,
    disabled,
  }: {
    value: string | null;
    noBorder?: boolean;
    size: number;
    active?: boolean;
    error?: boolean;
    disabled?: boolean;
  }) => {
    const cellBoxProps = getRestyleProps<typeof Box>({
      width: size,
      height: size,
      maxWidth: 48,
      maxHeight: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: error
        ? 'strokeError'
        : disabled
          ? 'strokeTertiary'
          : active
            ? 'strokePrimary'
            : 'strokeSecondary',
      borderRadius: 'm',
      mr: noBorder ? '0' : 'x2',
      testID: TestIds.CODE_INPUT.CELL,
    });
    return (
      <Box {...cellBoxProps}>
        {!!value && (
          <AnimatedBox
            entering={ZoomIn.springify()}
            exiting={ZoomOut.duration(200)}
          >
            <Text
              variant={'default-l-semibold'}
              color={disabled ? 'textTertiary' : 'textPrimary'}
            >
              {value}
            </Text>
          </AnimatedBox>
        )}
        {active && (
          <AnimatedBox
            entering={ZoomIn.springify().delay(100)}
            exiting={ZoomOut}
            width={2}
            height={'40%'}
            backgroundColor={'primarySec500'}
          />
        )}
      </Box>
    );
  },
  (p, n) => isEqualJson(p, n)
);

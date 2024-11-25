import { cloneElement, useCallback } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  useRestyle,
  border,
  backgroundColor,
  composeRestyleFunctions,
  createVariant,
  VariantProps,
  BoxProps,
} from '@shopify/restyle';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { TennisiTheme, useAppTheme } from '../mds';
import { TestIds } from '../config';
import { Text } from './Text';
import { Box } from './Box';
import { useButtonTextProps } from './hooks';
import { Row } from './Row';
import { IS_IOS } from '../config';

type RestyleProps = BoxProps<TennisiTheme> &
  VariantProps<TennisiTheme, 'buttonVariants'>;

const restyleFunctions = composeRestyleFunctions<TennisiTheme, RestyleProps>([
  border,
  backgroundColor,
  createVariant({ themeKey: 'buttonVariants' }),
]);

type Props = RestyleProps & {
  label?: string;
  onPress?: () => void;
  touchableProps?: TouchableOpacityProps;
  icon?: React.ReactElement;
  loading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  touchableProps,
  icon,
  loading,
  disabled,
  ...rest
}: Props) => {
  const { colors, textVariants, spacing } = useAppTheme();
  const props = useRestyle(restyleFunctions, rest);
  const textProps = useButtonTextProps(rest.variant ?? 'accent-l');
  const onPress = useCallback(() => {
    impactAsync(ImpactFeedbackStyle.Light);
    props.onPress?.();
  }, [props.onPress]);
  const isDisabled = loading || disabled || touchableProps?.disabled;
  return (
    <TouchableOpacity
      testID={TestIds.BUTTON}
      onPress={onPress}
      {...touchableProps}
      disabled={isDisabled}
    >
      <Row alignItems={'center'} {...props} opacity={isDisabled ? 0.5 : 1}>
        {!!label && (
          <Text
            {...textProps}
            numberOfLines={1}
            mr={icon ? 'x1' : '0'}
            lineHeight={IS_IOS ? 0 : undefined}
          >
            {label}
          </Text>
        )}
        {!!icon && !loading && (
          <Box testID={TestIds.BUTTON_ICON}>
            {cloneElement(icon, {
              color: colors[textProps.color],
              width: textVariants[textProps.variant].fontSize + 5,
            })}
          </Box>
        )}
        {loading && (
          <ActivityIndicator
            testID={TestIds.ACTIVITY_INDICATOR}
            color={colors[textProps.color]}
            style={{ marginLeft: spacing.x2 }}
          />
        )}
      </Row>
    </TouchableOpacity>
  );
};

import { TouchableOpacity } from 'react-native';
import {
  useRestyle,
  composeRestyleFunctions,
  VariantProps,
  createVariant,
  BackgroundColorProps,
} from '@shopify/restyle';

import { useBetButtonMarker } from './hooks';
import { TennisiTheme } from '../mds';
import { Card } from './Card';
import { Text } from './Text';
import { Box } from './Box';
import { getRestyleProps } from '../utils';
import { Constants, TestIds } from '../config';

type RestyleProps = BackgroundColorProps<TennisiTheme> &
  VariantProps<TennisiTheme, 'betButtonVariants'>;

const restyleFunctions = composeRestyleFunctions<TennisiTheme, RestyleProps>([
  createVariant({ themeKey: 'betButtonVariants' }),
]);

type Props = RestyleProps & {
  title?: string;
  value?: string;
  noInfo?: boolean;
  active?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

export const BetButton = ({
  active,
  disabled,
  title,
  value,
  noInfo,
  onPress,
  ..._props
}: Props) => {
  const { variant = _props.variant, ...props } = useRestyle(
    restyleFunctions,
    _props
  );
  const {
    showPositiveMarker,
    positiveMarkerProps,
    showNegativeMarker,
    negativeMarkerProps,
    markerDefaultProps,
  } = useBetButtonMarker(variant);

  const textColor: keyof TennisiTheme['colors'] = active
    ? 'textAlternative'
    : 'textPrimary';
  const backgroundColor: keyof TennisiTheme['colors'] = active
    ? 'backgroundAlternative'
    : 'backgroundSecondary';
  const opacity = disabled ? 0.5 : 1;

  const cardProps = getRestyleProps<typeof Card>({
    padding: 'x2',
    width: Constants.BET_BUTTON.WIDTH,
    height: Constants.BET_BUTTON.HEIGHT,
    justifyContent: noInfo ? 'center' : 'space-between',
    backgroundColor: backgroundColor,
    ...props,
  });
  return (
    <Box alignSelf={'flex-start'} opacity={opacity}>
      <TouchableOpacity
        disabled={disabled || noInfo}
        onPress={onPress}
        testID={TestIds.BET_BUTTON}
        delayPressIn={50}
      >
        {showPositiveMarker && !noInfo && (
          <Box {...markerDefaultProps} {...positiveMarkerProps} />
        )}
        <Card {...cardProps}>
          {noInfo && (
            <>
              <Text color={'textTertiary'} style={{ alignSelf: 'center' }}>
                ---
              </Text>
            </>
          )}
          {!noInfo && (
            <>
              <Text
                numberOfLines={1}
                variant={'p-s-semibold'}
                color={textColor}
              >
                {title}
              </Text>
              <Text
                textAlign={'right'}
                variant={'p-s-semibold'}
                color={textColor}
              >
                {value}
              </Text>
            </>
          )}
        </Card>
        {showNegativeMarker && !noInfo && (
          <Box {...markerDefaultProps} {...negativeMarkerProps} />
        )}
      </TouchableOpacity>
    </Box>
  );
};

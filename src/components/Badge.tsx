import { useMemo } from 'react';
import {
  BoxProps,
  composeRestyleFunctions,
  createVariant,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import { TennisiTheme } from '../mds';
import { Box } from './Box';
import { Text } from './Text';

type RestyleProps = BoxProps<TennisiTheme> &
  VariantProps<TennisiTheme, 'badgeVariants'>;

const restyleFunctions = composeRestyleFunctions<TennisiTheme, RestyleProps>([
  createVariant({ themeKey: 'badgeVariants' }),
]);

export const Badge = ({ text, ..._props }: RestyleProps & { text: string }) => {
  const props = useRestyle(restyleFunctions, _props);
  const textColor = useMemo(() => {
    let color: keyof TennisiTheme['colors'] = 'textError';
    switch (_props.variant) {
      case 'outline-s':
      case 'outline-m':
        return (color = 'textError');
      case 'filled-s':
      case 'filled-m':
        return (color = 'textStatic');
    }
    return color;
  }, [_props.variant]);

  return (
    <Box {...props}>
      <Text variant={'p-xs-semibold'} color={textColor}>
        {text}
      </Text>
    </Box>
  );
};

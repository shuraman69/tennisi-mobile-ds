import { PropsWithChildren } from 'react';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  layout,
  shadow,
  composeRestyleFunctions,
  VariantProps,
  createVariant,
  BoxProps,
} from '@shopify/restyle';

import { TennisiTheme } from '../mds';
import { Box } from './Box';

type RestyleProps = BoxProps<TennisiTheme> &
  VariantProps<TennisiTheme, 'cardVariants'>;

const restyleFunctions = composeRestyleFunctions<TennisiTheme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
  shadow,
  createVariant({ themeKey: 'cardVariants' }),
]);

type Props = PropsWithChildren<RestyleProps>;

export const Card = ({ children, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return <Box {...props}>{children}</Box>;
};

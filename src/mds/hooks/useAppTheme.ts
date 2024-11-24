import { useTheme } from '@shopify/restyle';
import { TennisiTheme } from '../types';

export const useAppTheme = () => {
  return useTheme<TennisiTheme>();
};

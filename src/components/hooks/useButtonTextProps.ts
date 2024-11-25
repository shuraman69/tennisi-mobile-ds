import { useMemo } from 'react';
import { TennisiTheme } from '../../mds';

export const useButtonTextProps = (
  buttonVariant: keyof TennisiTheme['buttonVariants']
) => {
  const color: keyof TennisiTheme['colors'] = useMemo(() => {
    switch (buttonVariant) {
      case 'accent-l':
      case 'accent-m':
      case 'accent-s':
        return 'textStaticPrimary';
      case 'secondary-l':
      case 'secondary-m':
      case 'secondary-s':
        return 'textPrimary';
      case 'outline-l':
      case 'outline-m':
      case 'outline-s':
        return 'textPrimary';
    }
    return 'textPrimary';
  }, [buttonVariant]);
  const variant = useMemo((): keyof Omit<
    TennisiTheme['textVariants'],
    'defaults'
  > => {
    switch (buttonVariant) {
      case 'accent-l':
      case 'secondary-l':
      case 'outline-l':
        return 'default-l-semibold';
      case 'accent-m':
      case 'secondary-m':
      case 'outline-m':
        return 'default-m-semibold';
      case 'accent-s':
      case 'secondary-s':
      case 'outline-s':
        return 'default-s-semibold';
    }
    return 'default-l-semibold';
  }, [buttonVariant]);
  return { color, variant };
};

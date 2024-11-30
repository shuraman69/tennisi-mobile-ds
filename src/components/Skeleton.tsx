import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { ComponentProps, useMemo } from 'react';
import { useAppTheme } from '../mds';

const Loader = createShimmerPlaceholder(LinearGradient);

export const Skeleton = (props: ComponentProps<typeof Loader>) => {
  const theme = useAppTheme();
  const colors = useMemo(() => {
    return [theme.colors.controlsSkeleton, theme.colors.controlsQuaternary];
  }, [theme]);

  return <Loader shimmerColors={colors} location={[0.3, 0.5]} {...props} />;
};

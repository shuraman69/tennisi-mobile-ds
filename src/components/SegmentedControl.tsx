import { StyleSheet } from 'react-native';
import RNSegmentedControl, {
  SegmentedControlProps,
} from '@react-native-segmented-control/segmented-control';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useAppTheme } from '../mds';
import { TestIds } from '../config';
import { Box } from './Box';

export const SegmentedControl = ({
  variant = 's',
  loading = false,
  ...props
}: SegmentedControlProps & { variant?: 's' | 'l'; loading?: boolean }) => {
  const theme = useAppTheme();
  const styles = StyleSheet.create({
    s: { height: 32 },
    l: {
      height: 40,
    },
  });
  if (loading) {
    return (
      <Box testID={TestIds.SEGMENTED_CONTROL.LOADING}>
        {/*<SkeletonPlaceholder*/}
        {/*  speed={1500}*/}
        {/*  backgroundColor={theme.colors.controlsSkeleton}*/}
        {/*  borderRadius={8}>*/}
        {/*  <SkeletonPlaceholder.Item height={styles[variant].height} />*/}
        {/*</SkeletonPlaceholder>*/}
      </Box>
    );
  }
  return (
    <RNSegmentedControl
      {...props}
      testID={TestIds.SEGMENTED_CONTROL.CONTAINER}
      style={styles[variant]}
      fontStyle={{ color: theme.colors.textSecondary }}
      activeFontStyle={{ color: theme.colors.textPrimary }}
      backgroundColor={theme.colors.controlsTertiary}
      tintColor={theme.colors.controlsQuaternary}
    />
  );
};

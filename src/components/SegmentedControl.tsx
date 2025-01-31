import { StyleSheet } from 'react-native';
import RNSegmentedControl, {
  SegmentedControlProps,
} from '@react-native-segmented-control/segmented-control';
import { useAppTheme } from '../mds';
import { SIZE, TestIds } from '../config';
import { Box } from './Box';
import { Skeleton } from './Skeleton';
import { AnimatedBox } from './AnimatedBox';

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
        <AnimatedBox fadeLayout>
          <Skeleton
            width={SIZE.width - theme.spacing.x10}
            height={styles[variant].height}
            style={{
              borderRadius: theme.borderRadii.m,
            }}
          />
        </AnimatedBox>
      </Box>
    );
  }
  return (
    <AnimatedBox style={styles[variant]} fadeLayout>
      <RNSegmentedControl
        {...props}
        testID={TestIds.SEGMENTED_CONTROL.CONTAINER}
        style={styles[variant]}
        fontStyle={{ color: theme.colors.textSecondary }}
        activeFontStyle={{ color: theme.colors.textPrimary }}
        backgroundColor={theme.colors.controlsTertiary}
        tintColor={theme.colors.backgroundTertiary}
      />
    </AnimatedBox>
  );
};

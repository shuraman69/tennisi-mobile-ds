import { memo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Box } from './Box';
import { useAppTheme } from '../mds';

export const SliderIndicator = memo(
  ({
    data,
    itemWidth,
    scrollX,
  }: {
    data: any[];
    scrollX: SharedValue<number>;
    itemWidth: number;
  }) => {
    const { colors, spacing } = useAppTheme();
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      indicator: {
        width: 24,
        height: 4,
        borderRadius: 5,
        backgroundColor: colors.white1000,
        marginHorizontal: spacing.s,
      },
    });
    return (
      <Box style={styles.container}>
        {data.map((_: any, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const animatedStyle = useAnimatedStyle(() => {
            const width = interpolate(
              scrollX.value,
              [
                (index - 1) * itemWidth,
                index * itemWidth,
                (index + 1) * itemWidth,
              ],
              [
                styles.indicator.width * 0.7,
                styles.indicator.width,
                styles.indicator.width * 0.7,
              ],
              Extrapolation.CLAMP
            );
            const opacity = interpolate(
              scrollX.value,
              [
                (index - 1) * itemWidth,
                index * itemWidth,
                (index + 1) * itemWidth,
              ],
              [0.2, 1, 0.2],
              Extrapolation.CLAMP
            );
            return {
              width,
              opacity,
            };
          });

          return (
            <Animated.View
              key={index}
              style={[styles.indicator, animatedStyle]}
            />
          );
        })}
      </Box>
    );
  },
  (p, n) => p.data.length === n.data.length
);

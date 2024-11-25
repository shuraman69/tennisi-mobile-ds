import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useAppTheme } from '../mds';
import { Box } from './Box';
import { SliderIndicator } from './SliderIndicator';

export const AnimatedHorizontalSlider = <T,>({
  data,
  renderItem,
  itemWidth,
  withIndicator = true,
  scaleFactor = 0.9,
}: {
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  itemWidth: number;
  withIndicator?: boolean;
  scaleFactor?: number;
}) => {
  const { spacing } = useAppTheme();

  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });
  const _renderItem = useCallback(
    (_: T, index: number) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
          scrollX.value,
          [(index - 1) * itemWidth, index * itemWidth, (index + 1) * itemWidth],
          [scaleFactor, 1, scaleFactor]
        );
        return {
          transform: [{ scale }],
        };
      });

      return (
        <Box key={index}>
          <Animated.View style={animatedStyle}>
            {renderItem(_, index)}
          </Animated.View>
        </Box>
      );
    },
    [renderItem]
  );

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: -spacing.contentPadding,
    },
    scrollContent: {
      paddingHorizontal: spacing.contentPadding,
    },
    titleContainer: {
      paddingHorizontal: spacing.contentPadding,
    },
  });
  return (
    <>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        onScroll={onScroll}
      >
        {data.map(_renderItem)}
      </Animated.ScrollView>
      {withIndicator && (
        <SliderIndicator data={data} scrollX={scrollX} itemWidth={itemWidth} />
      )}
    </>
  );
};

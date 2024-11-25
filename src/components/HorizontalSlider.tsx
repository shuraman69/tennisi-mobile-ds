import { forwardRef, useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useAppTheme } from '../mds';
import { Box } from './Box';

interface HorizontalSliderProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}

const HorizontalSliderInner = <T,>(
  { data, renderItem }: HorizontalSliderProps<T>,
  ref: React.Ref<ScrollView>
) => {
  const theme = useAppTheme();
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: -theme.spacing.contentPadding,
    },
    contentContainer: {
      paddingHorizontal: theme.spacing.contentPadding,
    },
  });

  const renderedItems = useMemo(() => data.map(renderItem), [renderItem, data]);

  return (
    <Box style={styles.container}>
      <ScrollView
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {renderedItems}
      </ScrollView>
    </Box>
  );
};

export const HorizontalSlider = forwardRef(HorizontalSliderInner) as <T>(
  props: HorizontalSliderProps<T> & { ref?: React.Ref<ScrollView> }
) => ReturnType<typeof HorizontalSliderInner>;

import { ComponentProps, PropsWithChildren } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Box } from './Box';

const AnimatedBoxContainer = Animated.createAnimatedComponent(Box);

export const AnimatedBox = (
  props: PropsWithChildren<
    ComponentProps<typeof AnimatedBoxContainer> & { fadeLayout?: boolean }
  >
) => {
  const entering = props.fadeLayout ? FadeIn : undefined;
  const exiting = props.fadeLayout ? FadeOut : undefined;
  return (
    <AnimatedBoxContainer entering={entering} exiting={exiting}>
      {props.children}
    </AnimatedBoxContainer>
  );
};

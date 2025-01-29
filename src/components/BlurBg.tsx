import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Box } from './Box';
import { IS_IOS } from '../config';
import { TennisiThemeColors } from '../mds';

export const BlurBg = (
  props: ComponentProps<typeof BlurView> & {
    androidEnabled?: boolean;
    androidTransparent?: boolean;
    androidBackgroundColor?: TennisiThemeColors;
  }
) => {
  const initialIntensity = props.intensity || 30;
  const resultIntensity = IS_IOS
    ? initialIntensity
    : (initialIntensity || 0) >= 25
      ? 25
      : initialIntensity;

  if (!IS_IOS && props.androidTransparent) {
    return null;
  }
  if (!IS_IOS && !props.androidEnabled) {
    return (
      <Box
        backgroundColor={props.androidBackgroundColor || 'backgroundPrimary'}
        style={StyleSheet.compose(StyleSheet.absoluteFillObject, props.style)}
      />
    );
  }
  return (
    <BlurView
      experimentalBlurMethod={'dimezisBlurView'}
      blurReductionFactor={1}
      tint={'dark'}
      {...props}
      intensity={resultIntensity}
      style={StyleSheet.compose(StyleSheet.absoluteFill, props.style)}
    />
  );
};

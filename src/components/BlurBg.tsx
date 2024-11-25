import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Box } from './Box';
import { IS_IOS } from '../config';
import { TennisiV1Light } from '../mds';

export const BlurBg = (
  props: ComponentProps<typeof BlurView> & {
    androidEnabled?: boolean;
    androidTransparent?: boolean;
    androidBackgroundColor?: keyof (typeof TennisiV1Light)['colors'];
  }
) => {
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
      intensity={30}
      experimentalBlurMethod={'dimezisBlurView'}
      blurReductionFactor={1}
      tint={'dark'}
      {...props}
      style={StyleSheet.compose(StyleSheet.absoluteFill, props.style)}
    />
  );
};

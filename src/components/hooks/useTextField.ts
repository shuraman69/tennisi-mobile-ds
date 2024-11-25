import { useCallback, useRef, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  TextInput,
} from 'react-native';
import { TennisiTheme, useAppTheme } from '../../mds';
import { TextFieldProps } from '../../types';
import { IS_IOS } from '../../config';

type ColorType = keyof TennisiTheme['colors'];
export const useTextField = (props: TextFieldProps) => {
  const theme = useAppTheme();
  const [iconPosition, setIconPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(!!props.autoFocus);
  const inputRef = useRef<TextInput>(null);
  const floatingLabelAnimation = useRef(
    new Animated.Value(props.value || props.defaultValue ? 1 : 0)
  ).current;

  const handleFocus = useCallback(() => {
    Animated.timing(floatingLabelAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
    inputRef.current?.focus();
    setIsFocused(true);
  }, [floatingLabelAnimation]);

  const handleBlur = useCallback(() => {
    if (!props.value) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
    setIsFocused(false);
  }, [floatingLabelAnimation, props.value]);

  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [props.icon ? 17 : 14, -8],
    }),
    left: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        iconPosition ? iconPosition + theme.spacing.x2 : 8,
        theme.spacing.x3,
      ],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 10],
    }),
  };

  const onIconLayout = useCallback(
    (e: LayoutChangeEvent) => setIconPosition(e.nativeEvent.layout.width),
    []
  );

  const borderColor: ColorType = props.error
    ? 'graphicError'
    : isFocused
      ? 'graphicPrimary'
      : 'strokeTertiary';
  const textColor: ColorType = isFocused ? 'textPrimary' : 'textSecondary';
  const placeholderColor: ColorType = props.label
    ? isFocused
      ? 'textTertiary'
      : 'transparent'
    : 'textTertiary';

  const styles = StyleSheet.create({
    textInput: {
      flex: 1,
      color: theme.colors[textColor],
      fontSize: theme.textVariants['default-m-semibold'].fontSize,
      height: 20,
      padding: 0,
    },
    textArea: {
      paddingTop: IS_IOS ? 3.5 : 2, // override react-native input default multiline styles,
      minHeight: 110,
      height: 'auto',
    },
    label: {
      position: 'absolute',
      zIndex: 1,
      paddingLeft: 6,
      paddingRight: 6,
      color:
        props.error && isFocused
          ? theme.colors.textError
          : isFocused
            ? theme.colors.textPrimary
            : theme.colors.textSecondary,
      backgroundColor:
        isFocused || props.value
          ? theme.colors.backgroundPrimary
          : 'transparent',
    },
    icon: {
      marginRight: theme.spacing.x1,
    },
  });

  return {
    inputRef,
    onIconLayout,
    handleFocus,
    handleBlur,
    styles,
    floatingLabelStyle,
    borderColor,
    textColor,
    placeholderColor,
  };
};

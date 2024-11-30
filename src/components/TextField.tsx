import React, { cloneElement } from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';
import { TextFieldProps } from '../types';
import { Text } from './Text';
import { Row } from './Row';
import { useAppTheme } from '../mds';
import { getRestyleProps } from '../utils';
import { Box } from './Box';
import { useTextField } from './hooks';
import { TestIds } from '../config';

const AnimatedText = Animated.createAnimatedComponent(Text);
export const TextField = (props: TextFieldProps) => {
  const theme = useAppTheme();
  const {
    inputRef,
    onIconLayout,
    floatingLabelStyle,
    styles,
    handleFocus,
    handleBlur,
    textColor,
    placeholderColor,
    borderColor,
  } = useTextField(props);

  const rowContainerStyles = getRestyleProps<typeof Row>({
    borderWidth: 1.5,
    borderRadius: 'm',
    px: 'x2',
    py: 'x3',
    alignItems: 'flex-start',
    borderColor,
  });

  return (
    <Box flex={1}>
      <Row {...rowContainerStyles}>
        {!!props.label && (
          <AnimatedText
            onPress={handleFocus}
            style={[styles.label, floatingLabelStyle]}
            variant={'default-m-semibold'}
            color={textColor}
          >
            {props.label}
          </AnimatedText>
        )}
        {!!props.icon && (
          <View style={styles.icon} onLayout={onIconLayout}>
            {cloneElement(props.icon, {
              color: theme.colors[textColor],
            })}
          </View>
        )}
        <Box flex={1}>
          <TextInput
            ref={inputRef}
            style={StyleSheet.compose(
              styles.textInput,
              props.multiline && styles.textArea
            )}
            selectionColor={theme.colors.primarySec500}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor={theme.colors[placeholderColor]}
            textAlignVertical={props.multiline ? 'top' : 'auto'}
            {...props}
            testID={TestIds.TEXT_FIELD}
          />
        </Box>
      </Row>
      {!!props.description && (
        <Text
          variant={'default-s'}
          color={props.error ? 'textError' : 'textTertiary'}
          mt={'x2'}
        >
          {props.description}
        </Text>
      )}
    </Box>
  );
};

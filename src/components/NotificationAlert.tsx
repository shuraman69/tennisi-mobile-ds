import { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { isEqual } from 'lodash';
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';
import { CloseBigIcon, InfoIcon } from '../icons';
import { getRestyleProps } from '../utils';
import { NotificationAlertProps } from '../types';
import { useAppTheme, hexToRgba } from '../mds';
import { TestIds } from '../config';
import { Row } from './Row';
import { Button } from './Button';
import { Box } from './Box';
import { Text } from './Text';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const NotificationAlert = memo(
  ({
    show,
    onClose,
    title,
    subtitle,
    showIcon = true,
    button1Text,
    button2Text,
    button1Action,
    button2Action,
  }: NotificationAlertProps) => {
    const theme = useAppTheme();
    const containerProps = getRestyleProps<typeof Box>({
      style: [
        StyleSheet.absoluteFill,
        { backgroundColor: hexToRgba('#000', 0.7) },
      ],
      zIndex: 1000,
      alignItems: 'center',
      justifyContent: 'center',
    });
    const alertBoxProps = getRestyleProps<typeof Box>({
      backgroundColor: 'backgroundPrimary',
      minWidth: '80%',
      maxWidth: '80%',
      borderRadius: 'xl',
      py: 'x4',
      px: 'x5',
      testID: TestIds.NOTIFICATION_ALERT.CONTAINER,
    });
    if (!show) {
      return null;
    }
    return (
      <AnimatedBox
        {...containerProps}
        entering={FadeIn}
        exiting={FadeOut.delay(100)}
      >
        <AnimatedBox
          {...alertBoxProps}
          entering={ZoomIn.delay(100)}
          exiting={ZoomOut}
        >
          <Row alignItems={'flex-start'} justifyContent={'space-between'}>
            <Row alignItems={'flex-start'}>
              {showIcon && (
                <Box mr={'x3'} testID={TestIds.NOTIFICATION_ALERT.ICON}>
                  <InfoIcon
                    width={25}
                    height={25}
                    color={theme.colors.controlsSecondary}
                  />
                </Box>
              )}
              <Box width={'80%'}>
                <Text variant={'header-xs'}>{title}</Text>
                {!!subtitle && (
                  <Text
                    variant={'default-s-semibold'}
                    color={'textSecondary'}
                    mt={'x1'}
                  >
                    {subtitle}
                  </Text>
                )}
              </Box>
            </Row>
            <TouchableOpacity
              onPress={onClose}
              testID={TestIds.NOTIFICATION_ALERT.CLOSE_BUTTON}
            >
              <CloseBigIcon
                width={24}
                height={24}
                color={theme.colors.controlsSecondary}
              />
            </TouchableOpacity>
          </Row>
          {(!!button1Text || !!button2Text) && (
            <Row mt={'x4'}>
              {!!button1Text && (
                <Box flex={1} mr={'x2'}>
                  <Button
                    variant={'secondary-m'}
                    label={button1Text}
                    onPress={button1Action}
                  />
                </Box>
              )}
              {!!button2Text && (
                <Box flex={1}>
                  <Button
                    variant={'accent-m'}
                    label={button2Text}
                    onPress={button2Action}
                  />
                </Box>
              )}
            </Row>
          )}
        </AnimatedBox>
      </AnimatedBox>
    );
  },
  (p, n) => isEqual(p, n)
);

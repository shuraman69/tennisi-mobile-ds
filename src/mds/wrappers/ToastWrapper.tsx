import { useCallback, useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Toast, { BaseToast, BaseToastProps } from 'react-native-toast-message';
import { useAppTheme } from '../hooks';
import { CloseBigIcon, InfoIcon } from '../../icons';

export const ToastWrapper = (props: PropsWithChildren) => {
  const theme = useAppTheme();

  const styles = StyleSheet.create({
    topOffset: {
      top: 20,
    },
    borderLeftNull: {
      borderLeftWidth: 0,
    },
    success: {
      backgroundColor: theme.colors.backgroundSuccess,
    },
    warning: {
      backgroundColor: theme.colors.backgroundWarning,
    },
    error: {
      backgroundColor: theme.colors.backgroundError,
    },
    default: {
      backgroundColor: theme.colors.backgroundPrimary,
    },
    title: {
      fontSize: theme.textVariants['default-m-semibold'].fontSize,
      fontWeight: theme.textVariants['default-m-semibold'].fontWeight,
    },
    subtitle: {
      fontSize: theme.textVariants['default-xs-semibold'].fontSize,
      fontWeight: theme.textVariants['default-xs-semibold'].fontWeight,
    },
    leadingIcon: {
      alignSelf: 'center',
      marginLeft: 10,
      marginRight: -16,
      width: 20,
      height: 20,
    },
    successColor: {
      color: theme.colors.controlsSuccess,
    },
    warningColor: {
      color: theme.colors.controlsWarning,
    },
    errorColor: {
      color: theme.colors.controlsError,
    },
    closeButton: {
      alignSelf: 'center',
      marginRight: theme.spacing.x3,
    },
  });
  const renderLeadingIcon = useCallback(
    (type: 'success' | 'warning' | 'error') => () => (
      <InfoIcon
        style={styles.leadingIcon}
        width={styles.leadingIcon.width}
        height={styles.leadingIcon.height}
        color={styles[`${type}Color`]?.color || theme.colors.controlsSecondary}
      />
    ),
    []
  );
  const renderTrailingIcon = useCallback(
    () => (
      <TouchableOpacity
        style={styles.closeButton}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        onPress={() => Toast.hide()}
      >
        <CloseBigIcon width={22} height={22} />
      </TouchableOpacity>
    ),
    []
  );

  const renderToast = useCallback(
    (p: BaseToastProps & { type: 'success' }) => (
      <BaseToast
        style={[styles.borderLeftNull, styles.topOffset, styles[p.type]]}
        renderTrailingIcon={renderTrailingIcon}
        renderLeadingIcon={renderLeadingIcon(p.type)}
        {...p}
        text1Style={styles.title}
        text2Style={styles.subtitle}
      />
    ),
    []
  );

  // ToastConfig type
  const toastConfig: any = useMemo(
    () => ({
      success: renderToast,
      warning: renderToast,
      error: renderToast,
      default: renderToast,
    }),
    []
  );
  return (
    <>
      {props.children}
      <Toast config={toastConfig} />
    </>
  );
};

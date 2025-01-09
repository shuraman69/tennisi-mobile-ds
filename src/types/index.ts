import React from 'react';
import type { TextInputProps } from 'react-native';

export type TextFieldProps = TextInputProps & {
  icon?: React.ReactElement;
  label: string;
  description?: string;
  error?: boolean;
};

export type RadioButtonItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  buttons: RadioButtonItem[];
  selectedId?: string;
  onSelectedIdChange?: (id: string) => void;
  row?: boolean;
  cards?: boolean;
};

export type NotificationAlertProps = {
  title: string;
  subtitle?: string;
  show: boolean;
  onClose: () => void;

  showIcon?: boolean;

  button1Text?: string;
  button1Action?: () => void;
  button2Text?: string;
  button2Action?: () => void;
};

export type ChipProps = {
  label: string;
  onPress?: (label: string) => void;
  disabled?: boolean;
  showCloseButton?: boolean;
};

export type ChipsRowProps = {
  data: Omit<ChipProps, 'onPress'>[];
  onChipPress: (label: string) => void;
  loading?: boolean;
  loadingItemsCount?: number;
  disabled?: boolean;
};

export enum CyberCsGoTeamEnum {
  TERR = 'TERR',
  COUNTER_TERR = 'COUNTER_TERR',
}

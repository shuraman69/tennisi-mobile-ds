import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export const Constants = {
  AVATAR_DEFAULT_SIZE: 88,
  SKELETON_PLACEHOLDER_SPEED: 1200,
  CHECKBOX_SIZE: 20,
  BET_BUTTON: {
    WIDTH: 60,
    HEIGHT: 72,
  },
  TAB_ITEM: {
    BIG_SIZE: 48,
  },
  TEXT_FIELD: {
    HEIGHT: 48,
  },
};

export const TestIds = {
  BUTTON: 'button',
  BUTTON_ICON: 'button-icon',
  ACTIVITY_INDICATOR: 'activity-indicator',
  AVATAR_CONTAINER: 'avatar-container',
  AVATAR_IMAGE: 'avatar-image',
  CHECKBOX: 'checkbox',
  RADIO_GROUP: 'radio-group',
  SWITCH: 'switch',
  TEXT_FIELD: 'text-field',
  BET_BUTTON: 'bet-button',
  BET_BUTTON_MARKER: 'bet-button-marker',
  NOTIFICATION_ALERT: {
    CONTAINER: 'notification-alert-container',
    CLOSE_BUTTON: 'notification-alert-close-button',
    ICON: 'notification-alert-icon',
  },
  CODE_INPUT: {
    CELLS_CONTAINER: 'code-input-cells-container',
    CELL: 'code-input-cell',
    TEXT_INPUT: 'code-input-text-field',
  },
  SEGMENTED_CONTROL: {
    CONTAINER: 'segmented-control-container',
    LOADING: 'segmented-control-loading',
  },
  CHIPS: {
    ITEM: 'chips-item',
    LOADING: 'chips-loading',
    LOADING_ITEM: 'chips-loading-item',
    CLOSE_BUTTON: 'chips-close-button',
  },
};

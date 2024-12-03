jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  ImpactFeedbackStyle: {},
}));

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: require('react-native').View,
}));
jest.mock('expo-blur', () => ({
  BlurView: require('react-native').View,
}));

jest.mock('react-native-toast-message', () => {
  const Toast = () => null;

  Toast.show = jest.fn();
  Toast.hide = jest.fn();
  return Toast;
});

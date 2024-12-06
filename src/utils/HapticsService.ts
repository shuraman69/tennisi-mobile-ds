import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

const isSupported = (cb: () => void) => {
  if (Platform.OS !== 'web') {
    return cb();
  }
};

class HapticsService {
  notification(type: keyof typeof Haptics.NotificationFeedbackType) {
    isSupported(() =>
      Haptics.notificationAsync(Haptics.NotificationFeedbackType[type])
    );
  }
  impact(type: keyof typeof Haptics.ImpactFeedbackStyle) {
    isSupported(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle[type]));
  }
  selection() {
    isSupported(() => Haptics.selectionAsync());
  }
}

export default new HapticsService();

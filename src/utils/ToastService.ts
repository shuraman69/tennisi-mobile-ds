import Toast from 'react-native-toast-message';
import type { ToastShowParams } from 'react-native-toast-message';

class ToastService {
  success(props?: ToastShowParams) {
    Toast.show({ ...props, type: 'success' });
  }
  warning(props?: ToastShowParams) {
    Toast.show({ ...props, type: 'warning' });
  }
  error(props?: ToastShowParams) {
    Toast.show({ ...props, type: 'error' });
  }
  default(props?: ToastShowParams) {
    Toast.show({ ...props, type: 'default' });
  }
}

export default new ToastService();

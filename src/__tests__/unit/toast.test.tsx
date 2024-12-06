import { ToastService } from '../../utils';
import Toast from 'react-native-toast-message';

const getParams = (type: keyof typeof ToastService) => ({
  type,
  text1: type + 'text1',
  text2: type + 'text2',
});

describe('@Tennisi/ToastService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('.success called correctly', () => {
    ToastService.success(getParams('success'));
    expect(Toast.show).toHaveBeenCalledWith(getParams('success'));
  });
  test('.warning called correctly', () => {
    ToastService.warning(getParams('warning'));
    expect(Toast.show).toHaveBeenCalledWith(getParams('warning'));
  });
  test('.error called correctly', () => {
    ToastService.error(getParams('error'));
    expect(Toast.show).toHaveBeenCalledWith(getParams('error'));
  });
  test('.default called correctly', () => {
    ToastService.default(getParams('default'));
    expect(Toast.show).toHaveBeenCalledWith(getParams('default'));
  });
});

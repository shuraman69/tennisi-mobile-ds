import React from 'react';
import { _render } from '../utils';
import { NotificationAlert } from '../../components';
import { TestIds } from '../../config';
import { fireEvent } from '@testing-library/react-native';

const TITLE = 'NotificationAlert';
const SUBTITLE = 'NotificationAlertSubtitle';
const BUTTON_1_TEXT = 'Button 1';
const BUTTON_2_TEXT = 'Button 2';

describe('@Tennisi/NotificationAlert', () => {
  test('renders correctly if show true', () => {
    const { getByTestId, getByText } = _render(
      <NotificationAlert
        show
        title={TITLE}
        subtitle={SUBTITLE}
        onClose={jest.fn()}
      />
    );
    expect(getByTestId(TestIds.NOTIFICATION_ALERT.CONTAINER)).toBeDefined();
    expect(getByTestId(TestIds.NOTIFICATION_ALERT.CLOSE_BUTTON)).toBeDefined();
    expect(getByTestId(TestIds.NOTIFICATION_ALERT.ICON)).toBeDefined();
    expect(getByText(TITLE)).toBeDefined();
    expect(getByText(SUBTITLE)).toBeDefined();
  });
  test('do not renders if show false', () => {
    const { queryByTestId } = _render(
      <NotificationAlert
        show={false}
        title={TITLE}
        subtitle={SUBTITLE}
        onClose={jest.fn()}
      />
    );
    expect(queryByTestId(TestIds.NOTIFICATION_ALERT.CONTAINER)).toBeNull();
  });
  test('should handle onClose event', () => {
    const onClose = jest.fn();
    const { getByTestId } = _render(
      <NotificationAlert
        show
        title={TITLE}
        subtitle={SUBTITLE}
        onClose={onClose}
      />
    );
    const closeButton = getByTestId(TestIds.NOTIFICATION_ALERT.CLOSE_BUTTON);
    expect(closeButton).toBeDefined();
    fireEvent.press(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
  test('should hide subtitle text if not provided', () => {
    const { queryByText } = _render(
      <NotificationAlert show title={TITLE} onClose={jest.fn()} />
    );

    expect(queryByText(SUBTITLE)).toBeNull();
  });
  test('should hide icon', () => {
    const { queryByTestId } = _render(
      <NotificationAlert
        show
        title={TITLE}
        onClose={jest.fn()}
        showIcon={false}
      />
    );
    expect(queryByTestId(TestIds.NOTIFICATION_ALERT.ICON)).toBeNull();
  });
  test('should show no one buttons', () => {
    const { queryAllByTestId } = _render(
      <NotificationAlert
        show
        title={TITLE}
        onClose={jest.fn()}
        showIcon={false}
      />
    );
    expect(queryAllByTestId(TestIds.BUTTON)).toHaveLength(0);
  });
  test('should handle on button press handlers', () => {
    const onButtonPress1 = jest.fn();
    const onButtonPress2 = jest.fn();
    const { getAllByTestId } = _render(
      <NotificationAlert
        show
        title={TITLE}
        onClose={jest.fn()}
        showIcon={false}
        button1Text={BUTTON_1_TEXT}
        button2Text={BUTTON_2_TEXT}
        button1Action={onButtonPress1}
        button2Action={onButtonPress2}
      />
    );
    const buttons = getAllByTestId(TestIds.BUTTON);
    expect(buttons).toHaveLength(2);

    fireEvent.press(buttons[0]);
    fireEvent.press(buttons[1]);

    expect(onButtonPress1).toHaveBeenCalled();
    expect(onButtonPress2).toHaveBeenCalled();
  });
});

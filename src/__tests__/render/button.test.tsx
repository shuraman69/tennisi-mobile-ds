import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Button } from '../../components';
import { TestIds } from '../../config';
import { _render } from '../utils';
import { FireIcon } from '../../icons';

const Label = 'Label';

describe('@Tennisi/Button should', () => {
  test('renders correctly', () => {
    const { getByTestId } = _render(<Button label={Label} />);
    const button = getByTestId(TestIds.BUTTON);
    expect(button).toBeDefined();
  });
  test('pressed correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(<Button label={Label} onPress={onPress} />);
    const button = getByTestId(TestIds.BUTTON);
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
  test('not pressed if disabled', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <Button label={Label} onPress={onPress} disabled />
    );
    const button = getByTestId(TestIds.BUTTON);
    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });
  test('not pressed if loading and activity indicator displayed', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <Button label={Label} onPress={onPress} loading />
    );
    const button = getByTestId(TestIds.BUTTON);
    const activityIndicator = getByTestId(TestIds.ACTIVITY_INDICATOR);
    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
    expect(activityIndicator).toBeDefined();
  });
  test('renders with icon', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <Button label={Label} onPress={onPress} icon={<FireIcon />} />
    );
    const button = getByTestId(TestIds.BUTTON);
    const buttonIcon = getByTestId(TestIds.BUTTON_ICON);
    expect(button).toBeDefined();
    expect(buttonIcon).toBeDefined();
  });
  test('not renders with icon if loading', () => {
    const onPress = jest.fn();
    const { getByTestId, queryByTestId } = _render(
      <Button label={Label} onPress={onPress} icon={<FireIcon />} loading />
    );
    const button = getByTestId(TestIds.BUTTON);
    const activityIndicator = getByTestId(TestIds.ACTIVITY_INDICATOR);
    const buttonIcon = queryByTestId(TestIds.BUTTON_ICON);
    expect(button).toBeDefined();
    expect(activityIndicator).toBeDefined();
    expect(buttonIcon).toBeNull();
  });
});

import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { BetButton } from '../../components';
import { TestIds } from '../../config';
import { TennisiV1Light } from '../../mds';
import { _render } from '../utils';

const title = 'BetButton';
const value = '1.11';
const noInfoText = '---';

describe('@Tennisi/BetButton', () => {
  test('renders correctly', () => {
    const { getByTestId } = _render(<BetButton />);
    expect(getByTestId(TestIds.BET_BUTTON)).toBeDefined();
  });
  test('renders correctly with text and value', () => {
    const { getByText } = _render(<BetButton title={title} value={value} />);
    expect(getByText(title)).toBeDefined();
    expect(getByText(value)).toBeDefined();
  });
  test('do not render text and value id noInfo is true', () => {
    const { getByText, queryByText } = _render(
      <BetButton title={title} value={value} noInfo />
    );
    expect(queryByText(title)).toBeNull();
    expect(queryByText(value)).toBeNull();
    expect(getByText(noInfoText)).toBeDefined();
  });
  test('handles onPress correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <BetButton title={title} value={value} onPress={onPress} />
    );
    fireEvent.press(getByTestId(TestIds.BET_BUTTON));
    expect(onPress).toHaveBeenCalled();
  });
  test('do not call onPress if disabled', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <BetButton title={title} value={value} onPress={onPress} disabled />
    );
    const touchableOpacity = getByTestId(TestIds.BET_BUTTON);
    fireEvent.press(touchableOpacity);
    expect(touchableOpacity).toBeDefined();
    expect(onPress).not.toHaveBeenCalled();
  });
  test('do not call onPress if noInfo is true', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <BetButton title={title} value={value} onPress={onPress} noInfo />
    );
    const touchableOpacity = getByTestId(TestIds.BET_BUTTON);
    fireEvent.press(touchableOpacity);
    expect(touchableOpacity).toBeDefined();
    expect(onPress).not.toHaveBeenCalled();
  });
  test('positive marker renders correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <BetButton
        title={title}
        value={value}
        onPress={onPress}
        variant={'positive'}
      />
    );
    const marker = getByTestId(TestIds.BET_BUTTON_MARKER);
    expect(marker).toBeDefined();
    // @ts-ignore
    expect(JSON.stringify(marker.props)).toContain(
      TennisiV1Light.colors.strokeSuccess
    );
  });
  test('negative marker renders correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = _render(
      <BetButton
        title={title}
        value={value}
        onPress={onPress}
        variant={'negative'}
      />
    );
    const marker = getByTestId(TestIds.BET_BUTTON_MARKER);
    expect(marker).toBeDefined();
    // @ts-ignore
    expect(JSON.stringify(marker.props)).toContain(
      TennisiV1Light.colors.strokeError
    );
  });
  test('do not render positive if noInfo is true marker renders correctly', () => {
    const onPress = jest.fn();
    const { queryByTestId } = _render(
      <BetButton
        title={title}
        value={value}
        onPress={onPress}
        variant={'positive'}
        noInfo
      />
    );
    const marker = queryByTestId(TestIds.BET_BUTTON_MARKER);
    expect(marker).toBeNull();
  });
  test('do not render negative if noInfo is true marker renders correctly', () => {
    const onPress = jest.fn();
    const { queryByTestId } = _render(
      <BetButton
        title={title}
        value={value}
        onPress={onPress}
        variant={'negative'}
        noInfo
      />
    );
    const marker = queryByTestId(TestIds.BET_BUTTON_MARKER);
    expect(marker).toBeNull();
  });
});

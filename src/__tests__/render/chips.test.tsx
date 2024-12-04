import React from 'react';
import { _render } from '../utils';
import { Chips } from '../../components';
import { TestIds } from '../../config';
import { fireEvent } from '@testing-library/react-native';

const data = [
  { label: 'Chip 1', disabled: false },
  { label: 'Chip 2', disabled: true },
  { label: 'Chip 3', disabled: false },
];

describe('@Tennisi/Chips', () => {
  test('renders correctly', () => {
    const { getAllByTestId, getByText } = _render(
      <Chips data={data} onChipPress={jest.fn()} />
    );
    expect(getAllByTestId(TestIds.CHIPS.ITEM)).toHaveLength(data.length);
    data.forEach((item) => {
      expect(getByText(item.label)).toBeDefined();
    });
  });
  test('renders loading state correctly', () => {
    const { getByTestId, getAllByTestId, rerender } = _render(
      <Chips data={data} onChipPress={jest.fn()} loading />
    );
    const loadingContainer = getByTestId(TestIds.CHIPS.LOADING);
    expect(loadingContainer).toBeDefined();
    expect(getAllByTestId(TestIds.CHIPS.LOADING_ITEM)).toHaveLength(4);

    rerender(
      <Chips
        data={data}
        onChipPress={jest.fn()}
        loading
        loadingItemsCount={8}
      />
    );
    expect(getAllByTestId(TestIds.CHIPS.LOADING_ITEM)).toHaveLength(8);
  });
  test('handles onChipPress correctly', () => {
    const onChipPress = jest.fn();
    const { getByText } = _render(
      <Chips data={data} onChipPress={onChipPress} />
    );
    // @ts-ignore
    const firstChipButton = getByText(data[0].label).parent;
    if (firstChipButton) {
      fireEvent.press(firstChipButton);
    }
    expect(onChipPress).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(onChipPress).toHaveBeenCalledWith(data[0].label);
  });
  test('do not call onPress event if chip disabled', () => {
    const onChipPress = jest.fn();
    const { getByText } = _render(
      <Chips data={data} onChipPress={onChipPress} />
    );
    // @ts-ignore
    const disabledChipButton = getByText(data[1].label).parent;
    if (disabledChipButton) {
      fireEvent.press(disabledChipButton);
    }
    expect(onChipPress).not.toHaveBeenCalled();
  });
  test('do not call onPress event even if chips disabled globally', () => {
    const onChipPress = jest.fn();
    const { getByText } = _render(
      <Chips data={data} onChipPress={onChipPress} disabled />
    );
    // @ts-ignore
    const notDisabledLocallyChip = getByText(data[1].label).parent;
    if (notDisabledLocallyChip) {
      fireEvent.press(notDisabledLocallyChip);
    }
    expect(onChipPress).not.toHaveBeenCalled();
  });

  test('shows close button by default', () => {
    const onChipPress = jest.fn();
    const { getAllByTestId } = _render(
      <Chips data={data} onChipPress={onChipPress} />
    );
    expect(getAllByTestId(TestIds.CHIPS.CLOSE_BUTTON)).toHaveLength(
      data.length
    );
  });

  test('do not shows close button', () => {
    const onChipPress = jest.fn();
    const { queryAllByTestId } = _render(
      <Chips
        data={data.map((i) => ({ ...i, showCloseButton: false }))}
        onChipPress={onChipPress}
      />
    );
    expect(queryAllByTestId(TestIds.CHIPS.CLOSE_BUTTON)).toHaveLength(0);
  });
});

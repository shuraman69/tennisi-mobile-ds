import React from 'react';
import { _render } from '../utils';
import { SegmentedControl } from '../../components';
import { TestIds } from '../../config';
import { fireEvent } from '@testing-library/react-native';

describe('@Tennisi/Avatar', () => {
  test('renders correctly', () => {
    const { getByTestId } = _render(<SegmentedControl values={['1', '2']} />);
    expect(getByTestId(TestIds.SEGMENTED_CONTROL.CONTAINER)).toBeDefined();
  });
  test('renders correctly with different values', () => {
    const { getByTestId, rerender } = _render(
      <SegmentedControl values={['ONE']} />
    );
    const container = getByTestId(TestIds.SEGMENTED_CONTROL.CONTAINER);
    expect(container).toBeDefined();
    expect(container.props.values).toHaveLength(1);
    rerender(<SegmentedControl values={['ONE', 'TWO']} />);
    expect(container.props.values).toHaveLength(2);
    rerender(<SegmentedControl values={['ONE', 'TWO', 'THREE']} />);
    expect(container.props.values).toHaveLength(3);
    rerender(<SegmentedControl values={['ONE', 'TWO', 'THREE', 'FOUR']} />);
    expect(container.props.values).toHaveLength(4);
  });
  test('should call onValueChange', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = _render(
      <SegmentedControl
        values={['ONE', 'TWO', 'THREE', 'FOUR']}
        onValueChange={onValueChange}
      />
    );
    const container = getByTestId(TestIds.SEGMENTED_CONTROL.CONTAINER);
    expect(container).toBeDefined();

    fireEvent(container, 'onValueChange', 'THREE');
    expect(onValueChange).toHaveBeenCalledWith('THREE');
    fireEvent(container, 'onValueChange', 'TWO');
    expect(onValueChange).toHaveBeenCalledWith('TWO');
    fireEvent(container, 'onValueChange', 'FOUR');
    expect(onValueChange).toHaveBeenCalledWith('FOUR');
  });

  test('should show loading state', () => {
    const onValueChange = jest.fn();
    const { queryByTestId, getByTestId } = _render(
      <SegmentedControl
        loading
        values={['ONE', 'TWO', 'THREE', 'FOUR']}
        onValueChange={onValueChange}
      />
    );
    expect(queryByTestId(TestIds.SEGMENTED_CONTROL.CONTAINER)).toBeNull();
    expect(getByTestId(TestIds.SEGMENTED_CONTROL.LOADING)).toBeDefined();
  });
});

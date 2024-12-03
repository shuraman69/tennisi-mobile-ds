import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { _render } from '../utils';
import { Switch } from '../../components';
import { TestIds } from '../../config';

describe('@Tennisi/Switch', () => {
  test('renders correctly', () => {
    const { getByTestId } = _render(<Switch />);
    expect(getByTestId(TestIds.SWITCH)).toBeDefined();
  });
  test('renders correctly with checked state', async () => {
    const { getByTestId } = _render(<Switch value={true} />);
    const switchElement = getByTestId(TestIds.SWITCH);
    expect(switchElement.props.value).toBeTruthy();
  });
  test('renders correctly with unchecked state', async () => {
    const { getByTestId } = _render(<Switch value={false} />);
    const switchElement = getByTestId(TestIds.SWITCH);
    expect(switchElement.props.value).toBeFalsy();
  });
  test('call onChange event with correct arguments', async () => {
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <Switch value={false} onValueChange={onChange} />
    );
    const switchElement = getByTestId(TestIds.SWITCH);
    fireEvent(switchElement, 'onValueChange', true);
    expect(onChange).toHaveBeenCalledWith(true);
  });
  test('renders with description correctly', async () => {
    const DESCRIPTION = 'description';
    const { getByText } = _render(
      <Switch value={false} description={DESCRIPTION} />
    );
    const descriptionElement = getByText(DESCRIPTION);
    expect(descriptionElement).toBeDefined();
  });
  test('do not renders with description if description is empty string', async () => {
    const DESCRIPTION = '';
    const { queryByText } = _render(
      <Switch value={false} description={DESCRIPTION} />
    );
    const descriptionElement = queryByText(DESCRIPTION);
    expect(descriptionElement).toBeNull();
  });
});

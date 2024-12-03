import { _render } from '../utils';
import { CheckBox } from '../../components';
import { TestIds } from '../../config';
import { fireEvent } from '@testing-library/react-native';

const label = 'some checkbox label';

describe('@Tennisi/Checkbox', () => {
  test('renders correctly', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = _render(
      <CheckBox checked onValueChange={onValueChange} />
    );
    const checkbox = getByTestId(TestIds.CHECKBOX);
    expect(checkbox).toBeDefined();
  });
  test('on press event calls onValueChange', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = _render(
      <CheckBox checked onValueChange={onValueChange} />
    );
    const checkbox = getByTestId(TestIds.CHECKBOX);
    fireEvent.press(checkbox);
    fireEvent.press(checkbox);
    fireEvent.press(checkbox);
    expect(onValueChange).toBeCalledTimes(3);
  });
  test('on press event do not calls onValueChange if disabled', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = _render(
      <CheckBox checked onValueChange={onValueChange} disabled />
    );
    const checkbox = getByTestId(TestIds.CHECKBOX);
    fireEvent.press(checkbox);
    fireEvent.press(checkbox);
    fireEvent.press(checkbox);
    expect(onValueChange).toBeCalledTimes(0);
  });

  test('checkbox label to be defined', () => {
    const onValueChange = jest.fn();
    const { getByText } = _render(
      <CheckBox checked onValueChange={onValueChange} label={label} />
    );
    const _label = getByText(label);
    expect(_label).toBeDefined();
  });
});

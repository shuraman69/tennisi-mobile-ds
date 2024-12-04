import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { CodeInput } from '../../components';
import { TestIds } from '../../config';
import { _render } from '../utils';

describe('@Tennisi/CodeInput', () => {
  test('renders correctly', () => {
    const { getByTestId, getAllByTestId } = _render(
      <CodeInput value={'123456'} onChange={jest.fn()} />
    );
    expect(getByTestId(TestIds.CODE_INPUT.CELLS_CONTAINER)).toBeDefined();
    expect(getAllByTestId(TestIds.CODE_INPUT.CELL).length).toBe(6);
  });

  test('renders correctly with cellCount prop', () => {
    const { getByTestId, getAllByTestId } = _render(
      <CodeInput value={'123456'} onChange={jest.fn()} cellsCount={4} />
    );
    expect(getByTestId(TestIds.CODE_INPUT.CELLS_CONTAINER)).toBeDefined();
    expect(getAllByTestId(TestIds.CODE_INPUT.CELL).length).toBe(4);
  });

  test('should correctly change value', () => {
    const newValue = '123456';
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <CodeInput value={''} onChange={onChange} />
    );
    fireEvent.press(getByTestId(TestIds.CODE_INPUT.CELLS_CONTAINER));
    fireEvent.changeText(getByTestId(TestIds.CODE_INPUT.TEXT_INPUT), newValue);
    expect(onChange).toBeCalledWith(newValue);
  });

  test('value should be render in correct cell', () => {
    const value = '123456';
    const { getAllByTestId } = _render(
      <CodeInput value={value} onChange={jest.fn()} />
    );
    const cells = getAllByTestId(TestIds.CODE_INPUT.CELL);
    value.split('').forEach((char, index) => {
      expect(
        cells[index].props.children[0]?.props.children.props.children
      ).toBe(char);
    });
  });

  test('should show message if provided', () => {
    const value = '123456';
    const message = 'message';
    const { getByText } = _render(
      <CodeInput value={value} onChange={jest.fn()} message={message} />
    );
    expect(getByText(message)).toBeDefined();
  });

  test('should show button if buttonTitle provided', () => {
    const value = '123456';
    const buttonTitle = 'buttonTitle';
    const { getByText, getByTestId } = _render(
      <CodeInput value={value} onChange={jest.fn()} buttonTitle={buttonTitle} />
    );
    expect(getByText(buttonTitle)).toBeDefined();
    expect(getByTestId(TestIds.BUTTON)).toBeDefined();
  });

  test('should hhandle button press event', () => {
    const value = '123456';
    const buttonTitle = 'buttonTitle';
    const onButtonPress = jest.fn();
    const { getByText, getByTestId } = _render(
      <CodeInput
        value={value}
        onChange={jest.fn()}
        buttonTitle={buttonTitle}
        onButtonPress={onButtonPress}
      />
    );
    fireEvent.press(getByTestId(TestIds.BUTTON));
    expect(getByText(buttonTitle)).toBeDefined();
    expect(getByTestId(TestIds.BUTTON)).toBeDefined();
    expect(onButtonPress).toHaveBeenCalled();
  });
});

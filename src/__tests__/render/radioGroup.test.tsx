import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { RadioGroup } from '../../components';
import { RadioButtonItem } from '../../types';
import { _render } from '../utils';
import { RadioGroupProps } from '../../types';
import { TestIds } from '../../config';

const renderButtons = (props?: Partial<RadioGroupProps>) => {
  const buttons: RadioButtonItem[] = new Array(3).fill(1).map((_, index) => ({
    value: index.toString(),
    label: 'Option',
  }));
  return _render(<RadioGroup buttons={buttons} {...props} />);
};
describe('@Tennisi/RadioGroup', () => {
  test('renders correctly with correct numbers of buttons', () => {
    const { getByTestId, queryAllByText } = renderButtons();
    const renderedOptions = queryAllByText('Option');
    expect(getByTestId(TestIds.RADIO_GROUP)).toBeDefined();
    expect(renderedOptions.length).toBe(3);
  });
  test('renders checked button correctly', () => {
    const SELECTED_ID = '0';
    const { getByTestId } = renderButtons({
      selectedId: SELECTED_ID,
    });
    const radioGroup = getByTestId(TestIds.RADIO_GROUP);
    const selectedItem = radioGroup.props.children[SELECTED_ID];
    expect(selectedItem).toBeDefined();
    expect(selectedItem.props.selected).toBeTruthy();
  });
  test('changes selected button correctly', () => {
    const SELECTED_ID = '0';
    const NEW_SELECTED_ID = '1';
    const onSelectedIdChange = jest.fn();
    const { getAllByText } = renderButtons({
      selectedId: SELECTED_ID,
      onSelectedIdChange,
    });
    const radioButtons = getAllByText('Option');
    fireEvent.press(radioButtons[NEW_SELECTED_ID]);
    expect(onSelectedIdChange).toHaveBeenCalledWith(NEW_SELECTED_ID);
  });
  test('do not changes selected button if pressable button is disabled', () => {
    const SELECTED_ID = '0';
    const NEW_SELECTED_ID = '1';
    const onSelectedIdChange = jest.fn();
    const { getAllByText } = renderButtons({
      buttons: new Array(3).fill(1).map((_, index) => ({
        label: 'Option',
        value: index.toString(),
        disabled: index.toString() === NEW_SELECTED_ID,
      })),
      selectedId: SELECTED_ID,
      onSelectedIdChange,
    });
    const radioButtons = getAllByText('Option');
    fireEvent.press(radioButtons[NEW_SELECTED_ID]);
    expect(onSelectedIdChange).not.toHaveBeenCalled();
  });
});

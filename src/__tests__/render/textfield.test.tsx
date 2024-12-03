import { fireEvent } from '@testing-library/react-native';
import {
  DateMaskedTextField,
  PhoneMaskedTextField,
  TextField,
} from '../../components';
import { TestIds } from '../../config';
import { LockIcon } from '../../icons';
import { _render } from '../utils';

const LABEL = 'label';
const DESCRIPTION = 'description';

describe('@Tennisi/TextField', () => {
  test('renders correctly with label and description', () => {
    const { getByTestId, getByText } = _render(
      <TextField label={LABEL} description={DESCRIPTION} />
    );
    const textField = getByTestId(TestIds.TEXT_FIELD);
    const textFieldLabel = getByText(LABEL);
    const textFieldDescription = getByText(DESCRIPTION);
    expect(textField).toBeDefined();
    expect(textFieldLabel).toBeDefined();
    expect(textFieldDescription).toBeDefined();
  });
  test('calls onChangeText correctly', () => {
    const VALUE = 'value';
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <TextField label={LABEL} onChangeText={onChange} />
    );
    const textField = getByTestId(TestIds.TEXT_FIELD);
    fireEvent.changeText(textField, VALUE);
    expect(onChange).toHaveBeenCalledWith(VALUE);
  });
  test('shows icon correctly', () => {
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <TextField
        label={LABEL}
        onChangeText={onChange}
        icon={<LockIcon testID={'text-field-icon'} />}
      />
    );
    const textFieldIcon = getByTestId('text-field-icon');
    expect(textFieldIcon).toBeDefined();
  });
});

describe('@Tennisi/PhoneMaskedTextField', () => {
  test('renders correctly with label and description', () => {
    const { getByTestId, getByText } = _render(
      <PhoneMaskedTextField label={LABEL} description={DESCRIPTION} />
    );
    const textField = getByTestId(TestIds.TEXT_FIELD);
    const textFieldLabel = getByText(LABEL);
    const textFieldDescription = getByText(DESCRIPTION);
    expect(textField).toBeDefined();
    expect(textFieldLabel).toBeDefined();
    expect(textFieldDescription).toBeDefined();
  });
  test('calls onChangeText correctly', () => {
    const VALUE = '9203337613';
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <PhoneMaskedTextField label={LABEL} onChangeText={onChange} />
    );
    const textField = getByTestId(TestIds.TEXT_FIELD);
    fireEvent.changeText(textField, VALUE);
    expect(onChange).toHaveBeenCalledWith(VALUE, VALUE, VALUE);
  });
  test('shows icon correctly', () => {
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <PhoneMaskedTextField
        label={LABEL}
        onChangeText={onChange}
        icon={<LockIcon testID={'text-field-icon'} />}
      />
    );
    const textFieldIcon = getByTestId('text-field-icon');
    expect(textFieldIcon).toBeDefined();
  });
});

describe('@Tennisi/DateMaskedTextField', () => {
  test('renders correctly with label and description', () => {
    const { getByTestId, getByText } = _render(
      <DateMaskedTextField label={LABEL} description={DESCRIPTION} />
    );
    const textField = getByTestId(TestIds.TEXT_FIELD);
    const textFieldLabel = getByText(LABEL);
    const textFieldDescription = getByText(DESCRIPTION);
    expect(textField).toBeDefined();
    expect(textFieldLabel).toBeDefined();
    expect(textFieldDescription).toBeDefined();
  });
  test('calls onChangeText correctly', () => {
    const VALUE = '22.02.2024';
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <DateMaskedTextField label={LABEL} onChangeText={onChange} />
    );
    const textField = getByTestId(TestIds.TEXT_FIELD);
    fireEvent.changeText(textField, VALUE);
    expect(onChange).toHaveBeenCalledWith(
      VALUE.replaceAll('.', '/'),
      VALUE.replaceAll('.', ''),
      VALUE.replaceAll('.', '/')
    ); // see react-native-mask-input Masks.DATE_DDMMYYYY
  });
  test('shows icon correctly', () => {
    const onChange = jest.fn();
    const { getByTestId } = _render(
      <DateMaskedTextField
        label={LABEL}
        onChangeText={onChange}
        icon={<LockIcon testID={'text-field-icon'} />}
      />
    );
    const textFieldIcon = getByTestId('text-field-icon');
    expect(textFieldIcon).toBeDefined();
  });
});

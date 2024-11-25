import { TouchableOpacity } from 'react-native';
import {
  composeRestyleFunctions,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useRestyle,
} from '@shopify/restyle';
import { TennisiTheme, useAppTheme } from '../mds';
import { CheckIcon } from '../icons';
import { getRestyleProps } from '../utils';
import { Constants, TestIds } from '../config';
import { Box } from './Box';
import { Row } from './Row';
import { Text } from './Text';

type RestyleProps = SpacingProps<TennisiTheme> & LayoutProps<TennisiTheme>;

const restyleFunctions = composeRestyleFunctions<TennisiTheme, RestyleProps>([
  spacing,
  layout,
]);
export const CheckBox = ({
  label,
  checked,
  disabled,
  onValueChange,
  ..._props
}: RestyleProps & {
  checked: boolean;
  onValueChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
}) => {
  const { colors } = useAppTheme();
  const props = useRestyle(restyleFunctions, _props);

  const checkboxContainerProps = getRestyleProps<typeof Box>({
    width: Constants.CHECKBOX_SIZE,
    height: Constants.CHECKBOX_SIZE,
    borderRadius: 's',
    backgroundColor: checked ? 'controlsBrand' : 'transparent',
    borderColor: 'strokePrimary',
    borderWidth: checked ? 0 : 1,
    alignItems: 'center',
    justifyContent: 'center',
    mr: 'x2',
  });

  return (
    <TouchableOpacity
      testID={TestIds.CHECKBOX}
      onPress={() => onValueChange(!checked)}
      disabled={disabled}
    >
      <Row alignItems={'center'} opacity={disabled ? 0.5 : 1}>
        <Box {...props} {...checkboxContainerProps}>
          <Box>
            {checked && (
              <CheckIcon
                width={Constants.CHECKBOX_SIZE}
                height={Constants.CHECKBOX_SIZE}
                color={colors.textPrimary}
              />
            )}
          </Box>
        </Box>
        {!!label && (
          <Text variant={'p-m-semibold'} color={'textPrimary'}>
            {label}
          </Text>
        )}
      </Row>
    </TouchableOpacity>
  );
};

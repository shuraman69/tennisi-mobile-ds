import { Switch as RNSwitch, SwitchProps } from 'react-native';
import { Row } from './Row';
import { Text } from './Text';
import { useAppTheme } from '../mds';
import { TestIds } from '../config';

export const Switch = ({
  description,
  ...props
}: SwitchProps & { description?: string }) => {
  const theme = useAppTheme();
  return (
    <Row alignItems={'center'}>
      <RNSwitch
        {...props}
        trackColor={{ true: theme.colors.primarySec500 }}
        thumbColor={theme.colors.white1000}
        style={[{ marginRight: theme.spacing['12'] }]}
        testID={TestIds.SWITCH}
      />
      {!!description && (
        <Text style={{ flex: 1 }} color={'textSecondary'}>
          {description}
        </Text>
      )}
    </Row>
  );
};

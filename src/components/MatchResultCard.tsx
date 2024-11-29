import { CskaIcon } from '../icons';
import { getRestyleProps } from '../utils';
import { Card } from './Card';
import { Row } from './Row';
import { Box } from './Box';
import { Text } from './Text';

export const MatchResultCard = () => {
  const avatarCardProps = getRestyleProps<typeof Card>({
    variant: 'bordered',
    borderRadius: 'full',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'backgroundTertiary',
    borderColor: 'strokeTertiary',
  });
  const topRowProps = getRestyleProps<typeof Row>({
    borderBottomWidth: 1,
    borderColor: 'controlsTertiary',
    alignItems: 'center',
    px: 'x2',
    py: 'x4',
    justifyContent: 'space-between',
  });
  const bottomRowProps = getRestyleProps<typeof Row>({
    px: 'x2',
    pt: 'x3',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  });
  return (
    <Card variant={'bordered'} alignSelf={'auto'}>
      <Row {...topRowProps}>
        <Row>
          <Row>
            <Card {...avatarCardProps}>
              <CskaIcon />
            </Card>
            <Card {...avatarCardProps} left={-16}>
              <CskaIcon />
            </Card>
          </Row>
          <Box>
            <Text variant={'default-l-semibold'} mb={'x1'}>
              Спартак Москва
            </Text>
            <Text variant={'default-l-semibold'}>Динамо Москва</Text>
          </Box>
        </Row>
        <Box>
          <Text variant={'default-l-semibold'} mb={'x1'}>
            3
          </Text>
          <Text variant={'default-l-semibold'}>2</Text>
        </Box>
      </Row>
      <Row {...bottomRowProps}>
        <Text variant={'default-m-semibold'}>9 тур МИР РПЛ</Text>
        <Box>
          <Text variant={'p-m-semibold'}>Открытие Арена</Text>
          <Text variant={'default-m'} color={'textSecondary'}>
            (Москва, Россия)
          </Text>
        </Box>
      </Row>
    </Card>
  );
};

import { Box } from './Box';
import { Card } from './Card';
import { Row } from './Row';
import { Text } from './Text';
import { CskaIcon, StarEmptyIcon } from '../icons';
import { TennisiThemeColors, useAppTheme } from '../mds';
import { getRestyleProps } from '../utils';
import { MatchBetButtonsRow } from './MatchBetButtonsRow';
import { BlurBg } from './BlurBg';
import { Counter } from './Counter';

export const MatchBanner = ({
  title,
  buttons,
  message,
  androidBackgroundColor,
}: {
  title?: string;
  buttons?: boolean;
  message?: string;
  androidBackgroundColor?: TennisiThemeColors;
}) => {
  const theme = useAppTheme();
  const cardProps = getRestyleProps<typeof Card>({
    padding: 'x3',
    paddingBottom: 'x4',
    backgroundColor: 'transparent',
    alignSelf: 'auto',
    overflow: 'hidden',
    borderTopStartRadius: 'l',
    borderTopEndRadius: 'l',
    borderBottomStartRadius: 's',
    borderBottomEndRadius: 's',
    mb: buttons ? 'x2' : '0',
  });
  const separatorProps = getRestyleProps<typeof Box>({
    my: 'x4',
    width: '100%',
    height: 1,
    backgroundColor: 'graphicTertiary',
  });
  return (
    <>
      {!!title && (
        <Text mb={'x3'} variant={'header-xs'}>
          {title}
        </Text>
      )}
      <Card {...cardProps}>
        <BlurBg
          tint={'default'}
          intensity={24}
          androidBackgroundColor={androidBackgroundColor}
        />

        <Row alignItems={'center'} justifyContent={'space-between'} mb={'x3'}>
          <Text variant={'p-s-semibold'} color={'textSecondary'}>
            МИР Российская Премьер Лига. 11 Тур
          </Text>
          <StarEmptyIcon color={theme.colors.textSecondary} />
        </Row>
        <TeamRow title={'ЦСКА'} />
        <Box {...separatorProps}>
          {!!message && (
            <Box
              position={'absolute'}
              right={theme.spacing.x4}
              top={-theme.spacing.x3}
            >
              <Counter text={message} />
            </Box>
          )}
        </Box>

        <TeamRow title={'Спартак Москва'} />
      </Card>
      {buttons && (
        <MatchBetButtonsRow
          androidBlurBackgroundColor={androidBackgroundColor}
          buttons={[
            {
              title: 'X',
              value: '1.56',
            },
            { title: '1', value: '1.56' },
            { title: 'X', value: '1.56' },
            { title: 'Еще', value: '+756' },
          ]}
        />
      )}
    </>
  );
};

const TeamRow = ({ title }: { title: string }) => {
  const theme = useAppTheme();
  return (
    <Row alignItems={'center'} maxWidth={'50%'}>
      <CskaIcon width={65} height={65} color={theme.colors.textSecondary} />
      <Text variant={'header-s'}>{title}</Text>
    </Row>
  );
};

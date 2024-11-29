import { ComponentProps, useCallback, useMemo } from 'react';
import { BoxProps } from '@shopify/restyle';
import { TennisiV1Light } from '../mds';
import { getRestyleProps } from '../utils';
import { Row } from './Row';
import { Card } from './Card';
import { Text } from './Text';
import { Box } from './Box';
import { TouchableOpacity } from 'react-native';
import { BlurBg } from './BlurBg';

export const MatchBetButtonsRow = ({
  lineTitle,
  buttons,
  variant = 'default',
  size = 'd',
  buttonBlurTint = 'default',
  buttonBlurIntensity = 20,
}: {
  lineTitle?: string;
  buttons: { title: string; value: string }[];
  variant?: 'default' | 'rounded';
  size?: 's' | 'd';
  buttonBlurTint?: 'default' | 'dark';
  buttonBlurIntensity?: number;
}) => {
  const SIZE = useMemo(() => ({ d: 70, s: 56 })[size], [size]);
  const VARIANT = useCallback(
    (
      isFirst: boolean,
      isLast: boolean
    ): Record<
      ComponentProps<keyof typeof Card>,
      BoxProps<typeof TennisiV1Light>
    > =>
      ({
        default: {
          borderRadius: 's',
          borderBottomStartRadius: isFirst ? 'l' : 's',
          borderBottomEndRadius: isLast ? 'l' : 's',
        },
        rounded: {
          borderRadius: 'l',
          borderBottomStartRadius: 'l',
          borderBottomEndRadius: 'l',
        },
      })[variant],
    [variant]
  );
  const cardProps = (isFirst: boolean, isLast: boolean) =>
    getRestyleProps<typeof Card>({
      flex: 1,
      height: SIZE,
      ...VARIANT(isFirst, isLast),
      marginRight: isLast ? '0' : 'x1',
      alignItems: 'center',
      justifyContent: 'center',
    });

  const lineTitleCardProps = getRestyleProps<typeof Card>({
    ...cardProps(true, true),
    py: 'x2',
    height: 'auto',
    alignSelf: 'stretch',
    flex: undefined,
    borderBottomEndRadius: 'null',
    borderBottomStartRadius: 'null',
    borderTopStartRadius: 'l',
    borderTopEndRadius: 'l',
    mb: 'x1',
  });
  const renderedButtons = useMemo(
    () =>
      buttons.map((b, index) => {
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;
        return (
          <Card
            key={index}
            {...cardProps(isFirst, isLast)}
            overflow={'hidden'}
            paddingHorizontal={'x3'}
          >
            <BlurBg intensity={buttonBlurIntensity} tint={buttonBlurTint} />
            <TouchableOpacity style={{ width: '100%' }}>
              <Box alignSelf={'flex-start'}>
                <Text variant={'default-m-semibold'}>{b.title}</Text>
              </Box>
              <Box alignSelf={'flex-end'}>
                <Text variant={'header-xs'}>{b.value}</Text>
              </Box>
            </TouchableOpacity>
          </Card>
        );
      }),
    [buttons, buttonBlurIntensity, buttonBlurTint]
  );
  return (
    <Box>
      {!!lineTitle && (
        <Card {...lineTitleCardProps}>
          <Text variant={'p-s-semibold'}>{lineTitle}</Text>
        </Card>
      )}
      <Row>{renderedButtons}</Row>
    </Box>
  );
};

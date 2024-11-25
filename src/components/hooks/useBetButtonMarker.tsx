import { Box } from '../Box';
import { getRestyleProps } from '../../utils';
import { Constants, TestIds } from '../../config';
import { TennisiTheme } from '../../mds';

export const useBetButtonMarker = (
  variant?: keyof TennisiTheme['betButtonVariants']
) => {
  const MARKER_OFFSET = -Constants.BET_BUTTON.HEIGHT / 2 + 2;
  const markerDefaultProps = getRestyleProps<typeof Box>({
    zIndex: -1,
    width: Constants.BET_BUTTON.WIDTH - 1,
    alignSelf: 'center',
    height: Constants.BET_BUTTON.HEIGHT / 2,
    borderRadius: 'm',
    testID: TestIds.BET_BUTTON_MARKER,
  });
  const negativeMarkerProps = getRestyleProps<typeof Box>({
    style: { marginTop: MARKER_OFFSET },
    backgroundColor: 'strokeError',
  });

  const positiveMarkerProps = getRestyleProps<typeof Box>({
    style: { marginBottom: MARKER_OFFSET },
    backgroundColor: 'strokeSuccess',
  });
  const showPositiveMarker = variant === 'positive';
  const showNegativeMarker = variant === 'negative';

  return {
    markerDefaultProps,
    negativeMarkerProps,
    positiveMarkerProps,
    showPositiveMarker,
    showNegativeMarker,
  };
};

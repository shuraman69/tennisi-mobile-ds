import React, { useCallback, useEffect, useState } from 'react';
import { Image, ImageResizeMode } from 'react-native';
import {
  composeRestyleFunctions,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useRestyle,
} from '@shopify/restyle';
import { TennisiTheme, useAppTheme } from '../mds';
import { UserIcon } from '../icons';
import { Box } from './Box';
import { Skeleton } from './Skeleton';
import { Constants, TestIds } from '../config';

type RestyleProps = SpacingProps<TennisiTheme> & LayoutProps<TennisiTheme>;

const restyleFunctions = composeRestyleFunctions<TennisiTheme, RestyleProps>([
  spacing,
  layout,
]);

export const Avatar = (
  _props: RestyleProps & {
    imageSource?: string;
    size?: number;
    resizeMode?: ImageResizeMode;
  }
) => {
  const theme = useAppTheme();
  const props = useRestyle(restyleFunctions, _props);
  const hasImage = !!props.imageSource;
  const [loading, setLoading] = useState(hasImage);
  const [error, setError] = useState(false);
  const image = { uri: props.imageSource };
  const size = props.size ?? Constants.AVATAR_DEFAULT_SIZE;

  const onLoadStart = useCallback(() => setLoading(true), []);
  const onLoadEnd = useCallback(() => setLoading(false), []);
  const onLoadError = useCallback(() => {
    onLoadEnd();
    setError(true);
  }, []);
  useEffect(() => {
    setError(false);
  }, [props.imageSource]);
  return (
    <Box
      testID={TestIds.AVATAR_CONTAINER}
      overflow={'hidden'}
      width={size}
      height={size}
      backgroundColor={'controlsTertiary'}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'full'}
      {...props}
    >
      {hasImage && !error && (
        <Image
          testID={TestIds.AVATAR_IMAGE}
          source={image}
          width={size}
          height={size}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onLoadError}
          resizeMode={props.resizeMode}
        />
      )}

      {(!hasImage || error) && (
        <UserIcon color={theme.colors.graphicSecondary} />
      )}

      {loading && !error && (
        <Box position={'absolute'} testID={TestIds.ACTIVITY_INDICATOR}>
          <Skeleton style={{ width: size, height: size }} />
        </Box>
      )}
    </Box>
  );
};

import {Box, Row, Text, TennisiTheme, useAppTheme, SIZE, getRestyleProps} from 'react-native-tennisi-mobile-ds';

export const ColorComponent = () => {
  const {colors} = useAppTheme();
  const colorContainerStyles = getRestyleProps<typeof Box>({
    justifyContent: 'center',
    alignItems: 'center',
    mr: 'x2',
    mb: 'x2',
    width: SIZE.width * 0.3,
    height: 140,
    padding: 'x2',
    borderWidth: 1,
    borderColor: 'backgroundAlternative',
    borderRadius: 'm',
  });
  const colorBoxStyles = getRestyleProps<typeof Box>({
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'backgroundAlternative',
    marginBottom: 'x2',
    borderRadius: 'm',
  });
  return (
    <Row flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
      {(Object.keys(colors) as (keyof TennisiTheme['colors'])[]).map(key => (
        <Box key={key} {...colorContainerStyles}>
          <Box {...colorBoxStyles} backgroundColor={key} />
          <Text fontSize={12} mb={'x2'}>
            {key}
          </Text>
          <Text fontSize={9}>{colors[key]}</Text>
        </Box>
      ))}
    </Row>
  );
};

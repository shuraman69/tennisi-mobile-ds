import { Box } from './Box';
import { Text } from './Text';

export const Counter = ({ text }: { text: string }) => {
  // TODO: add DS variants
  return (
    <Box
      backgroundColor={'controlsBrand'}
      py={'x1'}
      px={'x2'}
      borderRadius={'full'}
    >
      <Text variant={'p-s-semibold'} color={'textStaticPrimary'}>
        {text}
      </Text>
    </Box>
  );
};

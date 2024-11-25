import { PropsWithChildren } from 'react';
import { Box } from './Box';

export const Row = ({
  children,
  ...props
}: PropsWithChildren<(typeof Box)['defaultProps']>) => (
  <Box flexDirection={'row'} {...props}>
    {children}
  </Box>
);

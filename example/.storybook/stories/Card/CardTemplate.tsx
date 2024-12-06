import {Card, Text} from 'tennisi-mobile-ds';
import {Meta} from '@storybook/react';

export const CardTemplate = (props: Meta<typeof Card>) => {
  return (
    <Card
      alignSelf={'center'}
      width={'100%'}
      height={'60%'}
      alignItems={'center'}
      justifyContent={'center'}
      {...props}>
      <Text>Some Card content</Text>
    </Card>
  );
};

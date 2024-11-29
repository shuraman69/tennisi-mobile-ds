import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Box } from './Box';
import { Text } from './Text';

export const TeamPlayerCard = ({
  image,
  name,
  position,
  onPress,
}: {
  image: ImageSourcePropType;
  name: string;
  position: string;
  onPress: () => void;
}) => {
  const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Box>
        <Box mb={'x3'}>
          <Image source={image} style={styles.image} />
        </Box>
        <Text variant={'default-m-semibold'} mb={'x1'}>
          {name}
        </Text>
        <Text color={'textSecondary'}>{position}</Text>
      </Box>
    </TouchableOpacity>
  );
};

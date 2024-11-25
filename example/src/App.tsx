import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
  AnimatedHorizontalSlider,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyRubelIcon,
  multiply,
  TennisiMDSWrapper,
} from 'react-native-tennisi-mobile-ds';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  return (
    <TennisiMDSWrapper>
      <Entry />
    </TennisiMDSWrapper>
  );
}

const Entry = () => {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <CurrencyEuroIcon />
      <CurrencyRubelIcon />
      <CurrencyDollarIcon />
      <AnimatedStyleUpdateExample />
      <AnimatedHorizontalSlider
        data={[1, 2, 3]}
        renderItem={(_, index) => (
          <Text style={{ width: 200, backgroundColor: 'green' }}>{index}</Text>
        )}
        itemWidth={200}
      />
    </View>
  );
};

function AnimatedStyleUpdateExample() {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    backgroundColor: 'red',
  },
});

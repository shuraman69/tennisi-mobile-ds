import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyRubelIcon,
  multiply,
  TennisiMDSWrapper,
} from 'react-native-tennisi-mobile-ds';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

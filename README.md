# react-native-tennisi-mobile-ds

Tennisi Mobile App Design System

## Installation

```sh
npm install react-native-tennisi-mobile-ds
```
#### - Install [react-native-svg](https://www.npmjs.com/package/react-native-svg) & [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) packages

## Usage


Wrap your app in TennisiMDSWrapper
```js
import { TennisiMDSWrapper } from 'react-native-tennisi-mobile-ds';

export default function App() {
  return (
    <TennisiMDSWrapper>
      <YourAppComponent />
    </TennisiMDSWrapper>
  );
}
```

```js
import { useAppTheme } from 'react-native-tennisi-mobile-ds';

export default function YourAppComponent() {
  const { colors, spacing } = useAppTheme();
  return (
    <Text style={{color: colors.textBrand, marginBottom: spacing.x4}}>
      Hello World
    </Text>
  );
}
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

### Установка и настройка `tennisi-mobile-ds`

`tennisi-mobile-ds` — это библиотека компонентов и дизайн-системы для мобильного приложения Tennisi Mobile App, созданная на основе React Native.

---

### **Шаг 1: Установка пакета**
Установите пакет через `npm` или `yarn`:

#### Используя `npm`:
```bash
npm install tennisi-mobile-ds
```

#### Используя `yarn`:
```bash
yarn add tennisi-mobile-ds
```

---

### **Шаг 2: Установка peer-зависимостей**
Для корректной работы библиотеки убедитесь, что вы установили все необходимые peer-зависимости:

```bash
expo install @react-native-segmented-control/segmented-control expo-blur expo-haptics expo-linear-gradient react-native-reanimated react-native-svg
```

---

### **Шаг 3: Настройка iOS (CocoaPods)**
Для работы `expo-haptics` и других зависимостей на iOS необходимо выполнить установку CocoaPods:

1. Перейдите в папку `ios` вашего проекта:
   ```bash
   cd ios
   ```

2. Выполните команду `pod install`:
   ```bash
   pod install
   ```

3. Вернитесь в корневую папку проекта:
   ```bash
   cd ..
   ```

---

### **Шаг 4: Настройка Reanimated**
`react-native-reanimated` требует дополнительной настройки: инструкции можно найти [здесь](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

---

### **Шаг 5: Использование библиотеки**
Теперь вы можете импортировать компоненты из `tennisi-mobile-ds` и использовать их в своем проекте:

```javascript
import { YourComponent } from 'tennisi-mobile-ds';

export default function App() {
  return <YourComponent />;
}
```

---

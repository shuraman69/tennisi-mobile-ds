import { useCallback, useState } from 'react';

export const useSwitchTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const switchTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);
  return { theme, switchTheme };
};

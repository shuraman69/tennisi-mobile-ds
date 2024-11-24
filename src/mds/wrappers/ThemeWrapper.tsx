import React, { useContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { TennisiV1Dark, TennisiV1Light } from '../styles';
import { useSwitchTheme as _useSwitchTheme } from '../hooks';

export const ThemeSwitchContext = React.createContext<{
  theme: 'dark' | 'light';
  switchTheme: () => void;
}>({ theme: 'dark', switchTheme: () => {} });
export const useSwitchTheme = () => useContext(ThemeSwitchContext);

export const ThemeWrapper = (props: PropsWithChildren) => {
  const { theme, switchTheme } = _useSwitchTheme();
  const contextValue = useMemo(
    () => ({
      theme,
      switchTheme,
    }),
    [theme]
  );
  return (
    <ThemeProvider theme={theme === 'dark' ? TennisiV1Dark : TennisiV1Light}>
      <ThemeSwitchContext.Provider value={contextValue}>
        {props.children}
      </ThemeSwitchContext.Provider>
    </ThemeProvider>
  );
};

import type { PropsWithChildren } from 'react';
import { ThemeWrapper } from './ThemeWrapper';
import { ToastWrapper } from './ToastWrapper';

export const TennisiMDSWrapper = (props: PropsWithChildren) => {
  return (
    <ThemeWrapper>
      <ToastWrapper>{props.children}</ToastWrapper>
    </ThemeWrapper>
  );
};

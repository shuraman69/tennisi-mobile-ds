import type { PropsWithChildren } from 'react';
import { ThemeWrapper } from './ThemeWrapper';
import { ToastWrapper } from './ToastWrapper';

const TennisiMDSWrapper = (props: PropsWithChildren) => {
  return (
    <ThemeWrapper>
      <ToastWrapper>{props.children}</ToastWrapper>
    </ThemeWrapper>
  );
};

export { ToastWrapper, TennisiMDSWrapper };

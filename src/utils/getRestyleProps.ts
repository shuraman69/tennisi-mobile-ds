import type { ComponentProps, JSXElementConstructor } from 'react';

export const getRestyleProps = <T extends JSXElementConstructor<any>>(
  props: ComponentProps<T>
) => props;

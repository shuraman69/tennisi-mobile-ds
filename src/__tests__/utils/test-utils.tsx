import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { TennisiMDSWrapper } from '../../mds';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <TennisiMDSWrapper>{children}</TennisiMDSWrapper>;
  // return (
  //   <GestureHandlerRootView style={{ flex: 1 }}>
  //     {/*<SafeAreaProvider style={{ flex: 1 }}>*/}
  //     {/*</SafeAreaProvider>*/}
  //     {/*</StoreWrapper>*/}
  //     {/*</NavigationWrapper>*/}
  //   </GestureHandlerRootView>
  // );
};

function _render<T>(ui: React.ReactElement<T>, options?: RenderOptions) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export { _render };

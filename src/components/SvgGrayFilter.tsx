import { PropsWithChildren } from 'react';
import Svg, { Defs, FeColorMatrix, Filter, G } from 'react-native-svg';

export const SvgGrayFilter = (
  props: PropsWithChildren<{ enabled: boolean; size: number }>
) => {
  if (!props.enabled) {
    return <>{props.children}</>;
  }

  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
    >
      <Defs>
        <Filter id="gray">
          <FeColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0 0 0 1 0"
          />
        </Filter>
      </Defs>
      <G filter="url(#gray)">{props.children}</G>
    </Svg>
  );
};

import { TennisiV1Light } from '../styles';

export type TennisiTheme = typeof TennisiV1Light;

export type TennisiThemeColors = keyof (typeof TennisiV1Light)['colors'];

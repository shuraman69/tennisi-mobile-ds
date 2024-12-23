import { createTheme } from '@shopify/restyle';
import { colors } from './tokens';
import { TennisiTheme } from '../../../types';
import { TennisiV1Light } from './TennisiV1Light';

export const TennisiV1Dark = createTheme<TennisiTheme>({
  ...TennisiV1Light,
  colors: {
    ...TennisiV1Light.colors,
    // Background colors
    backgroundPrimary: colors.neutrals950,
    backgroundSecondary: colors.white50,
    backgroundSecondaryInverted: colors.white100,
    backgroundTertiary: colors.neutrals750,
    backgroundQuaternary: '#2D2D30',
    backgroundAlternative: colors.white1000,

    // Text colors
    textPrimary: colors.white1000,
    textSecondary: colors.neutrals550,
    textTertiary: colors.neutrals700,
    textAlternative: colors.neutrals950,
    textDisabled: colors.neutrals800,

    // Controls color
    controlsPrimary: colors.white1000,
    controlsSecondary: colors.white350,
    controlsTertiary: colors.white150,
    controlsQuaternary: colors.white50,
    controlsDisabled: colors.neutrals850,
    controlsSkeleton: colors.white100,

    // Graphic colors
    graphicPrimary: colors.white1000,
    graphicSecondary: colors.neutrals550,
    graphicTertiary: colors.neutrals700,
    graphicQuaternary: colors.neutrals950,

    // Stroke colors
    strokePrimary: colors.white1000,
    strokeSecondary: colors.white500,
    strokeTertiary: colors.white150,
    strokeQuaternary: colors.white50,

    //overlay
    overlayDefault: colors.white150,
  },
});

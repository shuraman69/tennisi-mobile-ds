import { createTheme } from '@shopify/restyle';
import {
  badgeVariants,
  betButtonVariants,
  borderRadii,
  buttonVariants,
  cardVariants,
  colors,
  spacing,
  textVariants,
} from './tokens';

export const TennisiV1Light = createTheme({
  colors: {
    ...colors,
    // Background colors
    backgroundPrimary: colors.white1000,
    backgroundSecondary: colors.neutrals50,
    backgroundSecondaryInverted: colors.black100,
    backgroundTertiary: colors.neutrals100,
    backgroundQuaternary: '#2D2D30',
    backgroundAlternative: colors.neutrals900,
    backgroundSuccess: colors.success100,
    backgroundWarning: colors.warning100,
    backgroundError: colors.error100,

    // Text colors
    textPrimary: colors.neutrals950,
    textSecondary: colors.neutrals500,
    textTertiary: colors.neutrals300,
    textAlternative: colors.white1000,
    textStaticPrimary: colors.neutrals950,
    textStatic: colors.white1000,
    textBrand: colors.primarySec500,
    textLink: colors.secondary500,
    textSuccess: colors.success500,
    textWarning: colors.warning500,
    textError: colors.error500,
    textDisabled: colors.neutrals350,

    // Controls color
    controlsBrand: colors.primarySec500,
    controlsPrimary: colors.neutrals950,
    controlsSecondary: colors.neutrals500,
    controlsTertiary: colors.neutrals300,
    controlsQuaternary: colors.white1000,
    controlsStatic: colors.white1000,
    controlsLink: colors.secondary500,
    controlsSuccess: colors.success500,
    controlsWarning: colors.warning500,
    controlsError: colors.error500,
    controlsDisabled: colors.neutrals150,
    controlsSkeleton: colors.neutrals250,

    // Graphic colors
    graphicBrand: colors.primarySec500,
    graphicPrimary: colors.neutrals950,
    graphicSecondary: colors.neutrals500,
    graphicTertiary: colors.neutrals300,
    graphicQuaternary: colors.white1000,
    graphicStaticPrimary: colors.neutrals950,
    graphicStatic: colors.white1000,
    graphicLink: colors.secondary500,
    graphicSuccess: colors.success500,
    graphicWarning: colors.warning500,
    graphicError: colors.error500,

    // Stroke colors
    strokeBrand: colors.primarySec500,
    strokePrimary: colors.black250,
    strokeSecondary: colors.black600,
    strokeTertiary: colors.black200,
    strokeQuaternary: colors.white1000,
    strokeFocused: colors.secondary500,
    strokeSuccess: colors.success500,
    strokeWarning: colors.warning500,
    strokeError: colors.error500,

    //overlay
    overlayDefault: colors.black300,
  },
  spacing,
  textVariants,
  cardVariants,
  betButtonVariants,
  buttonVariants,
  borderRadii,
  badgeVariants,
});

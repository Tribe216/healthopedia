import { css } from 'styled-components';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#aaaaaa'
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const breakpointsMax = {
  xs: breakpoints.sm - 1,
  sm: breakpoints.md - 1,
  md: breakpoints.lg - 1,
  lg: breakpoints.xl - 1,
  xl: 50000
}

export const media = {
  xl: (...rules) => css `@media (min-width: ${breakpoints.xl}px) { ${css(...rules)} }`,
  lg: (...rules) => css `@media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px) { ${css(...rules)} }`,
  md: (...rules) => css `@media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px) { ${css(...rules)} }`,
  sm: (...rules) => css `@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px) { ${css(...rules)} }`,
  xs: (...rules) => css `@media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm - 1}px) { ${css(...rules)} }`,
  breakpointUp: (breakpoint) => (...rules) => css `@media (min-width: ${breakpoints[breakpoint]}px) { ${css(...rules)} }`,
  breakpointDown: (breakpoint) => (...rules) => css `@media (min-width: 0px) and (max-width: ${breakpointsMax[breakpoint]}px) { ${css(...rules)} }`,
  between: (breakpointA, breakpointB) => (...rules) => css `@media (min-width: ${breakpoints[breakpointA]}px) and (max-width: ${breakpointsMax[breakpointB]}px) { ${css(...rules)} }`
}
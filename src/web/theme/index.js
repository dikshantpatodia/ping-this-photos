import { css } from 'styled-components';

export const BREAKPOINTS = {
  PHONE: 576,
  TABLET: 768,
  DESKTOP: 1012,
  WIDE_DESKTOP: 1280,
  XL_DESKTOP: 1366,
};

const media = Object.keys(BREAKPOINTS).reduce(
  (acc, label) => ({
    ...acc,
    [label]: (...args) => css`
      @media (max-width: ${BREAKPOINTS[label]}px) {
        ${css(...args)}
      }
    `,
  }),
  {},
);

export default {
  default: {
    ...media,
  },
};

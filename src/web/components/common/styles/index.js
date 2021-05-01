import { css } from 'styled-components';

export const FLEX = (
  align = null,
  justify = null,
  direction = null,
  wrap = null,
) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
  flex-wrap: ${wrap ? 'wrap' : null};
`;

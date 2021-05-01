import styled, { css } from 'styled-components';
import { FLEX } from '../../common/styles';

const size = {
  sm: css`
    min-height: 36px;
    min-width: 36px;
    font-size: var(--fs-14);
    line-height: 36px;
  `,
  md: css`
    min-height: 44px;
    min-width: 44px;
    line-height: 44px;
  `,
};

const getSize = (p) => size[p.size];

export const AvatarContainer = styled.div`
  border-radius: 50%;
  color: var(--color-mine-shaft);
  font-size: var(--fs-16);
  font-weight: var(--fw-semi-bold);
  user-select: none;
  text-transform: uppercase;
  ${FLEX('center', 'center')};
  background-color: var(--color-white);

  ${(p) => getSize(p)};
`;

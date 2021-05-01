import styled from 'styled-components';
import { FLEX } from '../styles';

export const Wrapper = styled.div`
  width: var(--width-100);
  height: var(--height-100-vp);
  ${FLEX('center', 'center')};
`;

export const Content = styled.div`
  font-size: var(--fs-16);
  font-weight: var(--fw-bold);
`;

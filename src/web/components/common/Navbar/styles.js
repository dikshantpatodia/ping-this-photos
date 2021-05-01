import styled from 'styled-components';
import { FLEX } from '../styles';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-white);
  z-index: var(--navbar-z-index);
  transition: top ${(p) => p.theme.MEDIUM_TRANSIT};
`;

export const SubContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  text-align: center;
  height: var(--navbar-height-m);
  background-color: var(--color-white);

  @media screen and (min-width: 769px) {
    margin: auto;
    padding: 0 30px;
    max-width: var(--main-max-width);
    height: var(--navbar-height);
    text-align: unset;
    ${FLEX('center')};
  };
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  text-decoration: none;
  line-height: var(--navbar-height-m);

  @media screen and (min-width: 769px) {
    left: unset;
    width: 72px;
    line-height: var(--navbar-height);
  };
`;

export const Logo = styled.div`
  font-size: var(--fs-14);
  font-weight: var(--fw-bold);
  color: var(--color-primary);

  @media screen and (min-width: 769px) {
    font-size: var(--fs-18);
  };
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  line-height: var(--navbar-height-m);

  @media screen and (min-width: 769px) {
    font-size: var(--fs-16);
    line-height: var(--navbar-height);
  };
`;

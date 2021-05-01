import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  margin-left: -15px;
  width: calc(100% + 30px);

  @media screen and (min-width: 769px) {
    height: 360px;
    margin-left: -30px;
    width: calc(100% + 60px);
  };
`;

export const Banner = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  box-shadow: inset 0 0 80px var(--color-mine-shaft);
`;

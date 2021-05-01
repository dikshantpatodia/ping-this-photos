import styled from 'styled-components';
import { FLEX } from '../common/styles';

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px 0 60px;
  max-width: var(--main-max-width);

  @media screen and (min-width: 769px) {
    padding: 30px 0 60px;
  };
`;

export const Title = styled.div`
  margin: 12px 0 24px;
  font-size: var(--fs-16);
  font-weight: var(--fw-bold);

  @media screen and (min-width: 769px) {
    margin: 16px 0 48px;
    font-size: var(--fs-24);
  };
`;

export const ImagesContainer = styled.div`
  @media screen and (min-width: 769px) {
    max-width: var(--main-max-width);
    column-count: 2;
    column-gap: 16px;
  };
  
  @media screen and (min-width: 992px) {
    column-count: 3;
    column-gap: 20px;
  };
  
  @media screen and (min-width: 1600px) {
    column-count: 4;
    column-gap: 24px;
  };
`;

export const AuthorDetails = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 10px;
  left: 10px;
  ${FLEX('center', 'center')};

  @media screen and (min-width: 769px) {
    bottom: 16px;
    left: 16px;
  };
`;

export const AuthorName = styled.div`
  margin-left: 8px;
  color: var(--color-white);
  text-shadow: 0.5px 0.5px var(--color-boulder);
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 16px;

  @media screen and (min-width: 992px) {
    margin-bottom: 20px;
  };
  
  @media screen and (min-width: 1600px) {
    margin-bottom: 24px;
  };

  &:hover {
    ${AuthorDetails} {
      visibility: visible;
    }
  }
`;

export const ImageItem = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

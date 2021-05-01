import React from 'react';
import Header from './Header';
import Gallery from '../Gallery';

import * as S from './styles';

const Homepage = () => (
  <S.Container>
    <Header />
    <Gallery />
  </S.Container>
);

export default Homepage;

import React from 'react';
import AnimatedLoader from 'src/assets/common/animated_loader.svg';
import * as S from './styles';

const WaitingIndicator = () => (
  <S.Container>
    <S.LoaderImage src={AnimatedLoader} alt='loading...' />
  </S.Container>
);

export default WaitingIndicator;

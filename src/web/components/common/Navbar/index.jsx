import React from 'react';
import { Link } from 'react-router-dom';
import { openRoutes } from 'src/web/routes';
import * as S from './styles';
import './index.scss';

const Navbar = () => (
  <S.Container id='navbar'>
    <S.SubContainer>
      <S.LogoContainer as={Link} to={openRoutes.root}>
        <S.Logo>Ping</S.Logo>
      </S.LogoContainer>
      <S.Title>Discover Beautiful Pictures</S.Title>
    </S.SubContainer>
  </S.Container>
);

export default Navbar;

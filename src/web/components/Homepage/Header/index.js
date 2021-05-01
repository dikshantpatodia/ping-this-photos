import React from 'react';
import BannerImageLowRes from 'src/assets/images/header_image_m.jpeg';
import BannerImage from 'src/assets/images/header_image.jpeg';
import { isMobileOrTablet } from 'src/web/common/utils';

import * as S from './styles';

const Header = () => (
  <S.Container>
    <S.Banner
      src={isMobileOrTablet() ? BannerImageLowRes : BannerImage}
      alt='header-image'
    />
  </S.Container>
);

export default Header;

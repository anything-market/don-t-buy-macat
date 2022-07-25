import React from 'react';
import * as S from './splash.style';

function Splash() {
  return (
    <>
      <S.SplashImgWrapper>
        <S.Logo />
        <S.LogoFlash />
        <S.LogoTxtImg />
      </S.SplashImgWrapper>
    </>
  );
}

export default Splash;

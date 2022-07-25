import React from 'react';
import * as S from './splash.style';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function Splash() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/home');
  //   }, 2000);
  // }, []);

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

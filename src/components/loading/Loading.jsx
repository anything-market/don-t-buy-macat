import React from 'react';
import * as S from './Loading.style';

const Loading = () => {
  return (
    <S.LoadingWrap>
      <S.StyledLoadingIco />
      <S.LoadingText>로딩중...</S.LoadingText>
    </S.LoadingWrap>
  );
};

export default Loading;

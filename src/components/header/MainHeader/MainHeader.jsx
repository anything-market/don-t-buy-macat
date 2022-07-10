import React from 'react';
import * as S from './mainHeader.style';

export default function MainHeader() {
  return (
    <S.BasicHeaderLayout>
      <S.HeaderTitle>사지마켓 피드</S.HeaderTitle>
      <S.SearchBtn>
        <S.SearchIcon />
      </S.SearchBtn>
    </S.BasicHeaderLayout>
  );
}

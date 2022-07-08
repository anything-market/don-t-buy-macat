import React from 'react';
import * as S from './mainHeader.style';
import IconSearch from '../../../assets/icon-search.svg';
export default function ChatHeader() {
  return (
    <S.BasicHeaderLayout>
      <S.HeaderTitle>사지마켓 피드</S.HeaderTitle>
      <S.SearchBtn>
        <img src={IconSearch} alt="검색" />
      </S.SearchBtn>
    </S.BasicHeaderLayout>
  );
}

import React from 'react';
import * as S from './mainHeader.style';
import { BasicHeaderLayout } from '../commonHeader.style';
import { useNavigate } from 'react-router-dom';

export default function MainHeader() {
  const navigate = useNavigate();
  const handleGoSearch = () => {
    navigate('/search');
  };
  return (
    <BasicHeaderLayout>
      <S.HeaderTitle>사지마켓 피드</S.HeaderTitle>
      <S.SearchBtn onClick={handleGoSearch}>
        <S.SearchIcon />
      </S.SearchBtn>
    </BasicHeaderLayout>
  );
}

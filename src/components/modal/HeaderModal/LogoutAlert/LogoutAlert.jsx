import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './logoutAlert.style';
export default function LogoutAlert({ handleCloseAlert }) {
  const navigate = useNavigate();
  const handleGoLogin = () => {
    navigate('/login');
  };
  return (
    <S.AlertContainer>
      <S.AlertMessage>로그아웃하시겠어요?</S.AlertMessage>
      <S.AlertBtnContainer>
        <S.AlertBtn onClick={handleCloseAlert}>취소</S.AlertBtn>
        <S.AlertBtn onClick={handleGoLogin}>로그아웃</S.AlertBtn>
      </S.AlertBtnContainer>
    </S.AlertContainer>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './logoutAlert.style';
export default function LogoutAlert({ handleOpenAlert }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    //스토리지 유저 정보 삭제
    window.localStorage.clear();
    //로그아웃 후 로그인 페이지로 이동
    navigate('/login');
  };
  return (
    <S.AlertContainer>
      <S.AlertMessage>로그아웃하시겠어요?</S.AlertMessage>
      <S.AlertBtnContainer>
        <S.AlertBtn onClick={handleOpenAlert}>취소</S.AlertBtn>
        <S.AlertBtn onClick={handleLogout}>로그아웃</S.AlertBtn>
      </S.AlertBtnContainer>
    </S.AlertContainer>
  );
}

import React, { useState, useEffect } from 'react';
import * as S from '../commonAlert.style';
export default function PostDeleteAlert({ handleCloseAlert }) {
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  return (
    <S.AlertContainer>
      <S.AlertMessage>해당 게시물을 삭제할까요?</S.AlertMessage>
      <S.AlertBtnContainer>
        <S.AlertBtn onClick={handleCloseAlert}>취소</S.AlertBtn>
        <S.AlertBtn>삭제</S.AlertBtn>
      </S.AlertBtnContainer>
    </S.AlertContainer>
  );
}

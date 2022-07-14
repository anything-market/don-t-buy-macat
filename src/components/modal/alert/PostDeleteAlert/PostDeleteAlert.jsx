import React from 'react';
import * as S from '../commonAlert.style';
export default function PostDeleteAlert({ handleCloseAlert }) {
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

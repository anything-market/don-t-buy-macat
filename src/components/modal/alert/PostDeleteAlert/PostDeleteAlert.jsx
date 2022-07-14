import React from 'react';
import * as S from './postDeleteAlert.style';
export default function PostDeleteAlert({ handleOpenAlert }) {
  return (
    <S.AlertContainer>
      <S.AlertMessage>해당 게시물을 삭제할까요?</S.AlertMessage>
      <S.AlertBtnContainer>
        <S.AlertBtn onClick={handleOpenAlert}>취소</S.AlertBtn>
        <S.AlertBtn>삭제</S.AlertBtn>
      </S.AlertBtnContainer>
    </S.AlertContainer>
  );
}

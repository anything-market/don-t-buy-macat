import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from '../commonAlert.style';
export default function PostDeleteAlert({ handleCloseAlert, postId }) {
  const [userToken, setUserToken] = useState('');
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  //입양 등록 게시물 삭제
  const handlePostDelete = async () => {
    try {
      const res = await axios
        .delete(`https://mandarin.api.weniv.co.kr/product/${postId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        })
        .then(() => {
          location.reload();
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.AlertContainer>
      <S.AlertMessage>해당 게시물을 삭제할까요?</S.AlertMessage>
      <S.AlertBtnContainer>
        <S.AlertBtn onClick={handleCloseAlert}>취소</S.AlertBtn>
        <S.AlertBtn onClick={handlePostDelete}>삭제</S.AlertBtn>
      </S.AlertBtnContainer>
    </S.AlertContainer>
  );
}

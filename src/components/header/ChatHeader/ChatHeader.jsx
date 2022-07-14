import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './chatHeader.style';
import ModalBtn from '../../modal/ModalBtn/ModalBtn';
export default function ChatHeader() {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <S.BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <S.UserName>애월읍 위니브 감귤농장</S.UserName>
      <ModalBtn contents="chat" />
    </S.BasicHeaderLayout>
  );
}

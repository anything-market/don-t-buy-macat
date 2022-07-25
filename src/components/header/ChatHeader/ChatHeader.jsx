import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './chatHeader.style';
import { BasicHeaderLayout } from '../commonHeader.style';
import ModalBtn from '../../modal/ModalBtn/ModalBtn';
import ChatModalContent from '../../modal/modalContent/ChatModalContent/ChatModalContent';
export default function ChatHeader({ name }) {
  const navigate = useNavigate();
  const handleGoPrev = () => {
    navigate(-1);
  };
  return (
    <BasicHeaderLayout>
      <button onClick={handleGoPrev}>
        <S.ArrowLeftIcon />
      </button>
      <S.UserName>{name}</S.UserName>
      <ModalBtn>
        <ChatModalContent />
      </ModalBtn>
    </BasicHeaderLayout>
  );
}

import React from 'react';
import * as S from './chat.style';
import ChatHeader from '../../../components/header/ChatHeader/ChatHeader';
import testuserInfo from '../TestUserInfo';
export default function Chat() {
  const pathId = window.location.href.slice(-1);
  const userChatRoom = testuserInfo[pathId - 1];
  return (
    <S.ChatContainer>
      <ChatHeader name={userChatRoom.username} />
      <S.ChatMain>
        <S.MessageBox>
          <S.UserImg src={userChatRoom.image}></S.UserImg>
          <S.UserMessage>{userChatRoom.message}</S.UserMessage>
          <S.UserMessageTime>{userChatRoom.messageTime}</S.UserMessageTime>
        </S.MessageBox>
      </S.ChatMain>
      <S.InputBox>
        <S.FileInput />
        <input className="A11yHidden" type="file" />
        <S.MessageInput type="text" placeholder="메세지를 입력하세요..." />
        <S.SendBtn>전송</S.SendBtn>
      </S.InputBox>
    </S.ChatContainer>
  );
}

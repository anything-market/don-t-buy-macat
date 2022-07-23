import React from 'react';
import * as S from './chat.style';
import ChatHeader from '../../../components/header/ChatHeader/ChatHeader';
import BasicProfile from '../../../assets/basic-profile.svg';
export default function Chat() {
  const userInfo = [
    {
      id: 1,
      image: BasicProfile,
      username: '집사냥',
      message: '보호소 방문 가능할까요?',
      time: '2020.10.25',
      messageTime: '12:39',
    },
    {
      id: 2,
      image: BasicProfile,
      username: '얼룩이엄마',
      message: '늘 감사합니다^^',
      time: '2020.10.25',
      messageTime: '12:39',
    },
    {
      id: 3,
      image: BasicProfile,
      username: '천안시보호소',
      message: '수고 많으십니다.',
      time: '2020.10.25',
      messageTime: '12:39',
    },
  ];
  const pathId = window.location.href.slice(-1);
  const userChatRoom = userInfo[pathId - 1];
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

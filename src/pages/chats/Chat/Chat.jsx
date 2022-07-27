import React, { useState, useRef } from 'react';
import * as S from './chat.style';
import ChatHeader from '../../../components/header/ChatHeader/ChatHeader';
import testuserInfo from '../TestUserInfo';
import { useEffect } from 'react';
export default function Chat() {
  const [isValid, setValid] = useState(false);
  const [value, setValue] = useState('');
  const pathId = window.location.href.slice(-1);
  const userChatRoom = testuserInfo[pathId - 1];
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    value ? setValid(true) : setValid(false);
  }, [value]);
  const fileUploadBtn = useRef();
  const handleOpenFile = () => {
    fileUploadBtn.current.click();
  };
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
        <S.FileInput onClick={handleOpenFile} />
        <input
          className="A11yHidden"
          type="file"
          accept="image/*"
          ref={fileUploadBtn}
        />
        <S.MessageInput
          type="text"
          placeholder="메세지를 입력하세요..."
          value={value}
          onChange={handleInput}
        />
        <S.SendBtn disabled={!isValid}>전송</S.SendBtn>
      </S.InputBox>
    </S.ChatContainer>
  );
}

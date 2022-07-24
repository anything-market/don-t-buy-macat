import React, { useState } from 'react';
import * as S from './chatList.style';
import BasicHeader from '../../../components/header/BasicHeader/BasicHeader';
import UserComponent from '../../../components/userComponent/UserComponent';
import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';
import testuserInfo from '../TestUserInfo';

export default function ChatList() {
  return (
    <>
      <BasicHeader />
      <S.ChatListUl>
        {testuserInfo.map((user) => (
          <li key={user.id}>
            <Link to={`/chats/${user.id}`} element={<Chat />}>
              <UserComponent
                id={user.id}
                image={user.image}
                username={user.username}
                message={user.message}
                time={user.time}
                isRead={isRead}
              />
            </Link>
          </li>
        ))}
      </S.ChatListUl>
    </>
  );
}

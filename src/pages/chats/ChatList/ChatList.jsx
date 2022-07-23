import React from 'react';
import * as S from './chatList.style';
import BasicHeader from '../../../components/header/BasicHeader/BasicHeader';
import BasicProfile from '../../../assets/basic-profile.svg';
import UserComponent from '../../../components/userComponent/UserComponent';
import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';
export default function ChatList() {
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
  return (
    <>
      <BasicHeader />
      <S.ChatListUl>
        {userInfo.map((user) => (
          <li key={user.id}>
            <Link to={`/chats/${user.id}`} element={<Chat />}>
              <UserComponent
                id={user.id}
                image={user.image}
                username={user.username}
                message={user.message}
                time={user.time}
              />
            </Link>
          </li>
        ))}
      </S.ChatListUl>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import * as S from './FollowContainer.style';
import FollowUserList from './../FollowUserList/FollowUserList';

const FollowContainer = ({ userToken, data, followEmpty }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(data);
  }, [data]);

  return (
    <S.FollowWrap>
      {userData && userData.length === 0 ? (
        <S.followEmptyMessage>{followEmpty}</S.followEmptyMessage>
      ) : (
        userData &&
        userData.map((item) => {
          return (
            <S.FollowUserWrap key={item._id}>
              <FollowUserList
                userToken={userToken}
                image={item.image}
                username={item.username}
                accountname={item.accountname}
                intro={item.intro}
                isFollow={item.isfollow}
              />
            </S.FollowUserWrap>
          );
        })
      )}
    </S.FollowWrap>
  );
};

export default FollowContainer;

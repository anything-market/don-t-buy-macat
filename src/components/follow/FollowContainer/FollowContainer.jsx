import React, { useState, useEffect } from 'react';
import UserComponent from './../../userComponent/UserComponent';
import * as S from './FollowContainer.style';

const FollowContainer = ({ data, followEmpty }) => {
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
              <UserComponent
                key={item._id}
                image={item.image}
                username={item.username}
                accountname={item.accountname}
                intro={item.intro}
              />
            </S.FollowUserWrap>
          );
        })
      )}
    </S.FollowWrap>
  );
};

export default FollowContainer;

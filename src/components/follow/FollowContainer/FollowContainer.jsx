import React from 'react';
import UserComponent from './../../userComponent/UserComponent';
import * as S from './FollowContainer.style';

const FollowContainer = () => {
  return (
    <S.FollowWrap>
      <S.FollowUserWrap>
        <UserComponent
          image={
            'https://pbs.twimg.com/media/E_935U7UcAwvNj5?format=jpg&name=4096x4096'
          }
          username={'샤샤'}
          accountname={'shasha'}
        />
      </S.FollowUserWrap>
    </S.FollowWrap>
  );
};

export default FollowContainer;

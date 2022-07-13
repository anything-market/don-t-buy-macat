import React from 'react';

import {
  CommentListWrapper,
  CommentListContainer,
  CommentListLi,
  ProfileImg,
  InformationBox,
  CommentText,
  Toggleimg,
} from './commentList.style';

function CommentList() {
  return (
    <CommentListWrapper>
      <CommentListContainer>
        <CommentListLi>
          <ProfileImg />
          <InformationBox>
            <span>아이디</span>
            <small>날짜</small>
          </InformationBox>
          <CommentText></CommentText>
          <Toggleimg />
        </CommentListLi>
      </CommentListContainer>
    </CommentListWrapper>
  );
}

export default CommentList;

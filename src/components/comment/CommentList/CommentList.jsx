/* eslint-disable react/prop-types */
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

function CommentList({ comments }) {
  console.log(comments);
  return (
    <CommentListWrapper>
      <CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <CommentListLi key={data.id}>
                <ProfileImg />
                <InformationBox>
                  <span>{data.author.username}</span>
                  <small>{new Date(data.createdAt).toLocaleDateString()}</small>
                </InformationBox>
                <CommentText>{data.content}</CommentText>
                <Toggleimg />
              </CommentListLi>
            );
          })}
      </CommentListContainer>
    </CommentListWrapper>
  );
}

export default CommentList;

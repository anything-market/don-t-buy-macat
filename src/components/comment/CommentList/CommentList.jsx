/* eslint-disable react/prop-types */
import React from 'react';
import { timeForToday } from '../../../utils/timeForToday';

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
  return (
    <CommentListWrapper>
      <CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <CommentListLi key={data.id}>
                <ProfileImg src={data.author.image} />
                <InformationBox>
                  <span>{data.author.username}</span>
                  <small>{timeForToday(data.createdAt)}</small>
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

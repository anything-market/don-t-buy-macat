import React from 'react';
import {
  CommentWrapper,
  CommentContainer,
  ProfileImg,
  CommentInput,
  CommentSubmitButton,
} from './comment.style';

function Comment() {
  return (
    <CommentWrapper>
      <CommentContainer>
        <ProfileImg />
        <CommentInput type="text" placeholder="댓글 입력하기..." />
        <CommentSubmitButton>게시</CommentSubmitButton>
      </CommentContainer>
    </CommentWrapper>
  );
}

export default Comment;

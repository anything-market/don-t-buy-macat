import React from 'react';
import {
  CommentReplyWrapper,
  CommentReplyContainer,
  ProfileImg,
  CommentInput,
  CommentSubmitButton,
} from './commentReply.style';

function Comment() {
  return (
    <CommentReplyWrapper>
      <CommentReplyContainer>
        <ProfileImg />
        <CommentInput type="text" placeholder="댓글 입력하기..." />
        <CommentSubmitButton>게시</CommentSubmitButton>
      </CommentReplyContainer>
    </CommentReplyWrapper>
  );
}

export default Comment;

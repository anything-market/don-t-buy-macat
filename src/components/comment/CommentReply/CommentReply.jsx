import React from 'react';
import { useState } from 'react';

import {
  CommentReplyWrapper,
  CommentReplyContainer,
  ProfileImg,
  CommentInput,
  CommentSubmitButton,
} from './commentReply.style';

function CommentReply() {
  const [comment, setComment] = useState('');

  const handleInput = (e) => {
    e.preventDefault;
    setComment(e.target.value);
    console.log(e.target.value);
  };

  return (
    <CommentReplyWrapper>
      <CommentReplyContainer>
        <ProfileImg />
        <CommentInput
          type="text"
          value={comment}
          placeholder="댓글 입력하기..."
          onChange={handleInput}
        />
        <CommentSubmitButton>게시</CommentSubmitButton>
      </CommentReplyContainer>
    </CommentReplyWrapper>
  );
}

export default CommentReply;

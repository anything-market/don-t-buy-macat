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
  const [isValid, setIsValid] = useState(false);

  const handleInput = (e) => {
    e.preventDefault;
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const changeButton = (e) => {
    e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
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
          onKeyUp={changeButton}
        />
        <CommentSubmitButton disabled={isValid ? false : true}>
          게시
        </CommentSubmitButton>
      </CommentReplyContainer>
    </CommentReplyWrapper>
  );
}

export default CommentReply;

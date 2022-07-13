/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  CommentReplyWrapper,
  CommentReplyContainer,
  ProfileImg,
  CommentInput,
  CommentSubmitButton,
} from './commentReply.style';

function CommentReply({ getComments }) {
  const [comment, setComment] = useState('');
  const [isValid, setIsValid] = useState(false);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2I4N2FhODJmZGNjNzEyZjQzODJhNCIsImV4cCI6MTY2MjY4OTcyMSwiaWF0IjoxNjU3NTA1NzIxfQ.eBZXMW7UGe1CCX23sZSf1qtIqnD-lCeIHsySOUdCJCg';
  const postId = '62cb8b2882fdcc712f4382bb';

  const handleInput = (e) => {
    e.preventDefault;
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const changeButton = (e) => {
    e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `http://146.56.183.55:5050/post/${postId}/comments`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      data: {
        comment: {
          content: `${comment}`,
        },
      },
    }).then((response) => {
      console.log(response.data.result);
      setComment('');
      getComments();
    });
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
        <CommentSubmitButton
          onClick={handleSubmit}
          disabled={isValid ? false : true}
        >
          게시
        </CommentSubmitButton>
      </CommentReplyContainer>
    </CommentReplyWrapper>
  );
}

export default CommentReply;

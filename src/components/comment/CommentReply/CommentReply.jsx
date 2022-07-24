/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  CommentReplyWrapper,
  CommentReplyContainer,
  ProfileImg,
  CommentInput,
  CommentSubmitButton,
} from './commentReply.style';

function CommentReply({ getComments, postId }) {
  const [comment, setComment] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [userToken, setUserToken] = useState('');
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

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
        Authorization: `Bearer ${userToken}`,
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

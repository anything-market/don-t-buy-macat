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
  ProfileImgBox,
} from './commentReply.style';

function CommentReply({ getComments, postId }) {
  const [comment, setComment] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [authorImg, setAuthorImg] = useState('');
  const [userToken, setUserToken] = useState('');
  const [accountName, setAccountName] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    const accountName = localStorage.getItem('Account Name');
    setUserToken(userToken);
    setAccountName(accountName);
  }, []);

  useEffect(() => {
    if (accountName) {
      axios({
        url: `https://mandarin.api.weniv.co.kr/profile/${accountName}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      }).then((response) => {
        setAuthorImg(response.data.profile.image);
      });
    }
  }, [accountName]);

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
      url: `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
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
        <ProfileImgBox>
          <ProfileImg authorImg={authorImg} />
        </ProfileImgBox>
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

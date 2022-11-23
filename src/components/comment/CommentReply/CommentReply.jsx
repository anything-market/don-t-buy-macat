/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as S from './commentReply.style';

function CommentReply({ getComments, postId }) {
  const [comment, setComment] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [authorImg, setAuthorImg] = useState('');
  const [userToken, setUserToken] = useState('');
  const [accountName, setAccountName] = useState('');

  useEffect(() => {
    setUserToken(localStorage.getItem('Access Token'));
    setAccountName(localStorage.getItem('Account Name'));
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
      })
        .then((response) => {
          setAuthorImg(response.data.profile.image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [accountName]);

  const handleInput = (e) => {
    e.preventDefault;
    setComment(e.target.value);
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
    })
      .then((response) => {
        console.log(response.data.result);
        setComment('');
        setIsValid(false);
        getComments();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.CommentReplyWrapper>
      <S.CommentReplyContainer>
        <S.ProfileImgBox>
          <S.ProfileImg authorImg={authorImg} />
        </S.ProfileImgBox>
        <S.CommentInput
          type="text"
          value={comment}
          placeholder="댓글 입력하기..."
          onChange={handleInput}
          onKeyUp={changeButton}
        />
        <S.CommentSubmitButton
          onClick={handleSubmit}
          disabled={isValid ? false : true}
        >
          게시
        </S.CommentSubmitButton>
      </S.CommentReplyContainer>
    </S.CommentReplyWrapper>
  );
}

export default CommentReply;

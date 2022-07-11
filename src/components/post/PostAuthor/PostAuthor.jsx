import React from 'react';
import DefaultProfileImg from './../../../assets/basic-profile-img-.svg';
import * as S from './PostAuthor.style';

const PostAuthor = () => {
  return (
    <S.AuthorWrap>
      <S.ProfileImgWrap src={DefaultProfileImg}></S.ProfileImgWrap>
      <S.AuthorInfo>
        <S.AuthorName>애월읍 위니브 감귤농장</S.AuthorName>
        <S.AuthorId>@ weniv_Mandarin</S.AuthorId>
      </S.AuthorInfo>
    </S.AuthorWrap>
  );
};

export default PostAuthor;

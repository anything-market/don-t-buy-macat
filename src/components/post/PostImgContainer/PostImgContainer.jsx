import React from 'react';
import * as S from './PostImgContainer.style';

const PostImgContainer = ({ image }) => {
  console.log(image);
  return (
    <S.ImgContainer>
      <S.ImgList>
        {
          //이미지가 있는 게시물이면서 단일이미지인 경우
          image.length !== 0 && image.split(',').length <= 1 ? (
            <S.ImgItem>
              <S.PostImg src={image} alt="" />
            </S.ImgItem>
          ) : null
        }
        {
          //이미지가 있는 게시물이면서 복수이미지인 경우
          image.length !== 0 && image.split(',').length > 1
            ? image.split(',').map((image) => {
                return (
                  <S.ImgItem key={Math.random()}>
                    <S.PostImg src={image} alt="" />
                  </S.ImgItem>
                );
              })
            : null
        }
      </S.ImgList>
    </S.ImgContainer>
  );
};

export default PostImgContainer;

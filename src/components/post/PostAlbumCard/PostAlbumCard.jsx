import React from 'react';
import * as S from './PostAlbumCard.style';

const PostAlbumCard = ({ data }) => {
  const singleImage = data.image.split(',').length === 0;

  if (data.image.length !== 0) {
    return (
      <S.AlbumCardLinkLi>
        <S.AlbumCardLink href={`/post/${data.id}`}>
          <S.AlbumCardImg
            src={singleImage ? data.image : data.image.split(',')[0]}
          >
            {console.log(data)}
          </S.AlbumCardImg>
        </S.AlbumCardLink>
      </S.AlbumCardLinkLi>
    );
  }
};

export default PostAlbumCard;

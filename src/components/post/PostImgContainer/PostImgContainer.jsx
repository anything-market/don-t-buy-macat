import React from 'react';
import * as S from './PostImgContainer.style';

const PostImgContainer = ({ image, id }) => {
  const multipleImages = image && image.split(',').length > 1;

  const handleSliderBtn = (e) => {
    const parentUl = e.target.parentNode.parentNode.childNodes[0];
    const buttons = e.target.parentNode.childNodes;

    for (let i = 0; i < buttons.length; i++) {
      if (e.target.id === buttons[i].id) {
        e.target.setAttribute('style', 'background-color:#05704A');
      } else {
        buttons[i].setAttribute('style', 'background-color:#fff');
      }
    }

    if (e.target.id === 'slide-btn1') {
      parentUl.setAttribute('style', 'transform:translate(0px)');
    } else if (e.target.id === 'slide-btn2') {
      parentUl.setAttribute('style', 'transform:translate(-304px)');
    } else if (e.target.id === 'slide-btn3') {
      parentUl.setAttribute('style', 'transform:translate(-608px)');
    }
  };

  const onErrorImg = (e) => {
    e.target.src = 'https://mandarin.api.weniv.co.kr/1658886785881.png';
  };

  if (image && image.length !== 0) {
    return (
      <S.ImgContainer>
        <S.ImgList>
          {multipleImages ? (
            image.split(',').map((image) => {
              return (
                <S.ImgItem key={Math.floor(Math.random() * 1000)}>
                  <a href={`/post/${id}`}>
                    <S.PostImg src={image} alt="" onError={onErrorImg} />
                  </a>
                </S.ImgItem>
              );
            })
          ) : (
            <S.ImgItem>
              <a href={`/post/${id}`}>
                <S.PostImg src={image} alt="" onError={onErrorImg} />
              </a>
            </S.ImgItem>
          )}
        </S.ImgList>
        {multipleImages && (
          <S.ImgSliderBtnWrap>
            {image.split(',').map((item, index) => {
              return (
                <S.ImgSliderBtn
                  key={Math.floor(Math.random() * 1000)}
                  id={'slide-btn' + (index + 1)}
                  onClick={handleSliderBtn}
                  index={index}
                />
              );
            })}
          </S.ImgSliderBtnWrap>
        )}
      </S.ImgContainer>
    );
  }
};

export default PostImgContainer;

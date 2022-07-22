import React from 'react';
import * as S from './PostImgContainer.style';

const PostImgContainer = ({ image }) => {
  const multipleImages = image.split(',').length > 1;

  const handleSliderBtn = (e) => {
    const parentUl = e.target.parentNode.parentNode.childNodes[0];
    const buttons = e.target.parentNode.childNodes;

    //선택된 버튼에 인라인 색상 추가
    for (let i = 0; i < buttons.length; i++) {
      if (e.target.id === buttons[i].id) {
        e.target.setAttribute('style', 'background-color:#05704A');
      } else {
        // buttons[i].classList.remove('current');
        buttons[i].setAttribute('style', 'background-color:#fff');
      }
    }

    //선택된 버튼의 id에 따라 표시되는 이미지 변경
    if (e.target.id === 'slide-btn1') {
      parentUl.setAttribute('style', 'transform:translate(0px)');
    } else if (e.target.id === 'slide-btn2') {
      parentUl.setAttribute('style', 'transform:translate(-304px)');
    } else if (e.target.id === 'slide-btn3') {
      parentUl.setAttribute('style', 'transform:translate(-608px)');
    }
  };

  // 이미지가 있는 경우에만 렌더하기
  if (image.length !== 0) {
    return (
      <S.ImgContainer>
        <S.ImgList>
          {multipleImages ? (
            image.split(',').map((image) => {
              return (
                <S.ImgItem key={Math.floor(Math.random() * 1000)}>
                  <S.PostImg src={image} alt="" />
                </S.ImgItem>
              );
            })
          ) : (
            <S.ImgItem>
              <S.PostImg src={image} alt="" />
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
                  style={index === 0 ? { backgroundColor: '#05704A' } : null}
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

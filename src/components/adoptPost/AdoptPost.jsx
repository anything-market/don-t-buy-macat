import React, { useRef } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';
import * as S from './adoptPost.style';
export default function AdoptPost() {
  //파일 input
  const fileUploadBtn = useRef();

  //파일 input 클릭
  const handleOpenFile = () => {
    fileUploadBtn.current.click();
  };
  return (
    <>
      <UploadHeader />
      <S.Form id="adoptPost">
        <S.ImgLabel htmlFor="fileInput">이미지 등록</S.ImgLabel>
        <S.ImgPreview>
          <S.ImgButton onClick={handleOpenFile} />
        </S.ImgPreview>
        <input
          type="file"
          className="A11yHidden"
          id="fileInput"
          accept="image/*"
          ref={fileUploadBtn}
          requried
        />
        <S.TxtLabel htmlFor="name">이름</S.TxtLabel>
        <S.TxtInput
          id="name"
          type="text"
          placeholder="2~15자 이내여야 합니다."
          minLength="2"
          maxLength="15"
          requried
        />
        <S.TxtLabel htmlFor="price">책임비</S.TxtLabel>
        <S.TxtInput
          id="price"
          type="number"
          placeholder="숫자만 입력 가능합니다."
          requried
        />
        <S.TxtLabel htmlFor="url">보호소 링크</S.TxtLabel>
        <S.TxtInput
          id="url"
          placeholder="URL을 입력해 주세요."
          type="text"
          requried
        />
      </S.Form>
    </>
  );
}

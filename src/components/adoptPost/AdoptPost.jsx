import React, { useRef, useState } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';
import * as S from './adoptPost.style';
export default function AdoptPost() {
  const [previewImg, setPreviewImg] = useState('');
  //파일 input
  const fileUploadBtn = useRef();

  //파일 input 클릭
  const handleOpenFile = () => {
    fileUploadBtn.current.click();
  };

  //이미지 파일 base64로 형식 변환
  const handleParseImg = (e) => {
    const Blob = e.target.files[0];
    console.log(Blob);
    if (Blob === undefined) return;
    const reader = new FileReader();
    reader.readAsDataURL(Blob);
    reader.onload = () => {
      setPreviewImg(reader.result);
    };
  };

  return (
    <>
      <UploadHeader />
      <S.Form id="adoptPost">
        <S.ImgLabel htmlFor="fileInput">이미지 등록</S.ImgLabel>
        <S.ImgPreviewContainer>
          {previewImg && <S.PreviewImg src={previewImg} />}
          <S.ImgButton onClick={handleOpenFile} />
        </S.ImgPreviewContainer>
        <input
          type="file"
          className="A11yHidden"
          id="fileInput"
          accept="image/*"
          ref={fileUploadBtn}
          onChange={handleParseImg}
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

import React, { useRef, useState } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';
import * as S from './adoptPost.style';
import ValidationInput from './ValidationInput';
import regex from './Regex';
export default function AdoptPost() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [previewImg, setPreviewImg] = useState('');
  const [previewImgError, setPreviewImgError] = useState(false);

  //파일 input
  const fileUploadBtn = useRef();

  //파일 input 클릭
  const handleOpenFile = () => {
    fileUploadBtn.current.click();
    //취소 버튼 감지
    console.log('프리뷰이미지', previewImg);
    if (previewImg === '') {
      window.addEventListener('focus', () => setPreviewImgError(true), {
        once: true,
      });
      window.addEventListener('touchend', () => setPreviewImgError(true), {
        once: true,
      });
    }
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
      //reader의 결과값을 잘 받았을 때 error false처리
      setPreviewImgError(false);
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
        />
        <S.ImgErrorMessage>
          {previewImgError && <em>이미지가 존재하지 않습니다.</em>}
        </S.ImgErrorMessage>
        <ValidationInput
          label="이름"
          value={itemName}
          setValue={setItemName}
          maxValue="15"
          regexCheck={regex.nameRegex}
          defaultText="필수 입력항목입니다."
          placeholderText="이름을 입력해주세요."
          successText=""
          errorText="2~15자 이내여야 합니다."
        />
        <ValidationInput
          label="책임비"
          value={price}
          setValue={setPrice}
          regexCheck={regex.priceRegex}
          defaultText="필수 입력항목입니다."
          placeholderText="숫자를 입력해주세요."
          successText=""
          errorText="숫자만 입력가능합니다."
        />
        <ValidationInput
          label="보호소 링크"
          value={link}
          setValue={setLink}
          regexCheck={regex.urlRegex}
          defaultText="필수 입력항목입니다."
          placeholderText="URL을 입력해 주세요."
          successText=""
          errorText="올바른 URL형식으로 입력해 주세요."
        />
      </S.Form>
    </>
  );
}

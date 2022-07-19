import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';
import * as S from './adoptPost.style';
export default function AdoptPost() {
  const [itemName, setItemName] = useState('');
  const [itemNameError, setItemNameError] = useState(false);
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [link, setLink] = useState('');
  const [linkError, setLinkError] = useState(false);
  const [previewImg, setPreviewImg] = useState('');
  const [previewImgError, setPreviewImgError] = useState(false);
  //pass가 false일땐 버튼 disabled, true일땐 submit 가능
  const pass = previewImgError && itemNameError && priceError && linkError;
  console.log('데이터 전송 가능한가요?', pass);
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
      setPreviewImgError(true);
    };
  };

  //이름 유효성 검사
  const handleItemName = (e) => {
    if (e.target.value.length < 2) {
      //2자보다 작을땐 input line red컬러로 바뀜
      //error값은 false
      e.target.style.borderBottomColor = 'red';
      setItemNameError(false);
    } else if (e.target.value.length > 15) {
      //15자 이상 입력안되게 처리
      return;
    } else {
      //유효한 값일 때
      e.target.style.borderBottomColor = '#DBDBDB';
      setItemNameError(true);
    }
    setItemName(e.target.value);
  };
  console.log('이미지 유효한가요?', previewImgError);
  console.log('이름 유효한가요?', itemNameError);
  //   console.log('책임비 유효한가요?', priceError);
  //   console.log('링크 유효한가요?', linkError);

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
        <S.TxtLabel htmlFor="name">이름</S.TxtLabel>
        <S.TxtInput
          id="name"
          type="text"
          placeholder="2~15자 이내여야 합니다."
          value={itemName}
          onChange={handleItemName}
        />
        <S.TxtLabel htmlFor="price">책임비</S.TxtLabel>
        <S.TxtInput
          id="price"
          type="number"
          placeholder="숫자만 입력 가능합니다."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <S.TxtLabel htmlFor="url">보호소 링크</S.TxtLabel>
        <S.TxtInput
          id="url"
          placeholder="URL을 입력해 주세요."
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </S.Form>
    </>
  );
}

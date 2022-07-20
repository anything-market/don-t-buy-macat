import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import UploadHeader from '../header/UploadHeader/UploadHeader';
import * as S from './adoptPost.style';
export default function AdoptPost() {
  const [pass, setPass] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemNameError, setItemNameError] = useState(false);
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [link, setLink] = useState('');
  const [linkError, setLinkError] = useState(false);
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

  //이름 유효성 검사
  const handleItemName = (e) => {
    if (e.target.value.length === 1) {
      //error값은 true
      setItemNameError(true);
    } else if (e.target.value.length > 15) {
      //15자 이상 입력안되게 처리
      return;
    } else {
      //유효한 값일 때
      setItemNameError(false);
    }
    setItemName(e.target.value);
  };

  //숫자만 입력받고 천단위로 콤마찍는 함수
  const priceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  //가격 유효성 검사
  const handlePrice = (e) => {
    setPrice(priceFormat(e.target.value));
  };

  //다른 문자 입력시 경고창
  const handlePriceError = (e) => {
    console.log('onkeydown실행', e.keyCode);
    if (
      (!(
        e.ctrlKey ||
        e.altKey ||
        e.keyCode === 8 ||
        e.keyCode === 9 ||
        e.keyCode === 46 ||
        e.keyCode === 13
      ) &&
        e.keyCode < 48) ||
      e.keyCode > 57
    ) {
      setPriceError(true);
      console.log('priceError', priceError);
    } else {
      setPriceError(false);
    }
  };
  //링크 value값 넣어주기
  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const handleBtn = (e) => {
    //submit막기
    e.preventDefault();
    //값 있는지 차례대로 확인
    if (previewImg.length === 0) {
      setPreviewImgError(true);
    } else if (itemName.length === 0) {
      setItemNameError(true);
    } else if (price.length === 0) {
      setPriceError(true);
    } else if (link.length === 0) {
      setLinkError(true);
    } else {
      //url 유효성 검사는 버튼 클릭시 실행하기
      const urlpattern =
        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      if (urlpattern.test(link)) {
        setLinkError(false);
      } else {
        setLinkError(true);
      }
    }
    //pass가 true이면 전송하기
    setPass(!previewImgError && !itemNameError && !priceError && !linkError);
    if (pass) {
      //데이터 서버에 전송하기
    }
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
        <S.TxtLabel htmlFor="name">이름</S.TxtLabel>
        <S.TxtInput
          id="name"
          type="text"
          placeholder="2~15자 이내여야 합니다."
          value={itemName}
          onChange={handleItemName}
          error={itemNameError}
        />
        <S.InputErrorMessage>
          {itemNameError && <em>2~15자 이내여야 합니다.</em>}
        </S.InputErrorMessage>
        <S.TxtLabel htmlFor="price">책임비</S.TxtLabel>
        <S.TxtInput
          id="price"
          type="text"
          placeholder="숫자만 입력 가능합니다."
          value={price}
          onChange={handlePrice}
          onKeyDown={handlePriceError}
          error={priceError}
        />
        <S.InputErrorMessage>
          {priceError && <em>숫자를 입력해주세요.</em>}
        </S.InputErrorMessage>
        <S.TxtLabel htmlFor="url">보호소 링크</S.TxtLabel>
        <S.TxtInput
          id="url"
          placeholder="URL을 입력해 주세요."
          type="url"
          value={link}
          onChange={handleLink}
          error={linkError}
        />
        <S.InputErrorMessage>
          {linkError && <em>URL을 입력해 주세요.</em>}
        </S.InputErrorMessage>
        <button type="submit" onClick={handleBtn}>
          test
        </button>
      </S.Form>
    </>
  );
}

import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import UploadHeader from '../../components/header/UploadHeader/UploadHeader';
import * as S from './adoptPost.style';
import ValidationInput from './ValidationInput';
import regex from './Regex';
export default function AdoptPost() {
  //데이터 전송에 필요한 유저 토큰
  const [userToken, setUserToken] = useState('');
  //상태관리가 필요한 input 값
  const [previewImg, setPreviewImg] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

  //서버에 전송될 이미지 값
  const [uploadImg, setUploadImg] = useState('');

  //미리보기 이미지 valid check시 필요한 값
  const [previewImgError, setPreviewImgError] = useState(false);

  //모든 값 valid check, 서버 전송 가능상태시 true
  const [isValid, setValid] = useState({
    uploadImg: false,
    itemName: false,
    price: false,
    link: false,
  });

  //pass가 true면 submit button 활성화, false면 비활성화
  const pass =
    isValid.uploadImg && isValid.itemName && isValid.price && isValid.link;

  //파일 input
  const fileUploadBtn = useRef();

  //파일 input 클릭
  const handleOpenFile = () => {
    fileUploadBtn.current.click();
    setPreviewImgError(true);
  };

  //이미지 파일 base64로 형식 변환
  const handleParseImg = (e) => {
    const Blob = e.target.files[0];
    if (Blob === undefined) return;

    const reader = new FileReader();
    reader.readAsDataURL(Blob);
    e.target.value = '';

    return new Promise((resolve) => {
      reader.onload = async () => {
        setPreviewImg(reader.result);

        //reader의 결과값을 잘 받았을 때 error false처리
        setPreviewImgError(false);

        //서버로 부터 파일 네임 전송받기
        let formData = new FormData();
        formData.append('image', Blob);

        const res = await axios.post(
          'https://mandarin.api.weniv.co.kr/image/uploadfiles',
          formData,
        );
        setUploadImg(
          `https://mandarin.api.weniv.co.kr/${res.data[0].filename}`,
        );
        //데이터 서버 전송 가능상태 true
        setValid({ ...isValid, uploadImg: true });
        resolve();
      };
    });
  };

  //토큰 받아오기
  useEffect(() => {
    const userToken = localStorage.getItem('Access Token');
    setUserToken(userToken);
  }, []);

  //데이터 전송
  const handleSubmitData = async (e) => {
    //submit 막기
    e.preventDefault();
    try {
      const res = await axios
        .post(
          'https://mandarin.api.weniv.co.kr/product',
          {
            product: {
              itemName: `${itemName}`,
              price: parseInt(price.replace(',', '')), //서버 전송 가능형태로 가공
              link: `${link}`,
              itemImage: `${uploadImg}`,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-type': 'application/json',
            },
          },
        )
        .then(() => {
          //서버 데이터 전송 후 상태값들 모두 초기화
          setPreviewImg('');
          setItemName('');
          setPrice('');
          setLink('');
          setUploadImg('');
          setPreviewImgError(false);
          setValid({
            uploadImg: false,
            itemName: false,
            price: false,
            link: false,
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form id="adoptPost" method="POST" onSubmit={handleSubmitData}>
      <UploadHeader id="adoptPost" isValid={pass} />
      <S.Form>
        <S.ImgLabel htmlFor="fileInput">이미지 등록</S.ImgLabel>
        <S.ImgPreviewContainer>
          {previewImg && <S.PreviewImg src={previewImg} />}
          <S.ImgButton onClick={handleOpenFile} />
        </S.ImgPreviewContainer>
        <input
          type="file"
          className="A11yHidden"
          id="fileInput"
          accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
          ref={fileUploadBtn}
          onChange={handleParseImg}
        />
        <S.ImgErrorMessage>
          {previewImgError && <em>이미지가 존재하지 않습니다.</em>}
        </S.ImgErrorMessage>
        <ValidationInput
          id="itemName"
          label="이름"
          value={itemName}
          setValue={setItemName}
          maxValue="15"
          regexCheck={regex.nameRegex}
          defaultText="필수 입력항목입니다."
          placeholderText="이름을 입력해주세요."
          successText=""
          errorText="2~15자 이내여야 합니다."
          isValid={isValid}
          setValid={setValid}
        />
        <ValidationInput
          id="price"
          label="책임비"
          value={price}
          setValue={setPrice}
          regexCheck={regex.priceRegex}
          defaultText="필수 입력항목입니다."
          placeholderText="숫자를 입력해주세요."
          successText=""
          errorText="숫자만 입력가능합니다."
          isValid={isValid}
          setValid={setValid}
        />
        <ValidationInput
          id="link"
          label="보호소 링크"
          value={link}
          setValue={setLink}
          regexCheck={regex.urlRegex}
          defaultText="필수 입력항목입니다."
          placeholderText="URL을 입력해 주세요."
          successText=""
          errorText="올바른 URL형식으로 입력해 주세요."
          isValid={isValid}
          setValid={setValid}
        />
      </S.Form>
    </form>
  );
}

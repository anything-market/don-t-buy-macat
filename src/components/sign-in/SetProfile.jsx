import React, { useRef, useEffect, useState } from 'react';
import defaultProfilePhoto from '../../assets/basic-profile-img-.svg';
import fileUploadButton from '../../assets/upload-file.svg';
import * as S from './setProfile.style';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SetProfile() {
  const location = useLocation();
  const fileInput = useRef();
  const navigate = useNavigate();

  const email = location.state.email;
  const password = location.state.password;

  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');

  const [isUserName, setIsUserName] = useState(false);
  const [isUserID, setIsUserID] = useState(false);
  const passed = isUserName && isUserID;

  const [userNameWarningMessage, setUserNameWarningMessage] = useState('');
  const [userIDWarningMessage, setUserIDWarningMessage] = useState('');

  const [profileImage, setProfileImage] = useState('');
  const [preview, setPreview] = useState('');

  // file 인풋창 열어주는 함수
  const openInputFile = () => {
    fileInput.current.click();
  };

  // file input값 onchange시 실행
  const imageFileHandler = (e) => {
    const Blob = e.target.files[0];

    if (Blob === undefined) return;

    const reader = new FileReader();
    reader.readAsDataURL(Blob);

    return new Promise((resolve) => {
      reader.onload = async () => {
        setPreview(reader.result);
        let formData = new FormData();
        formData.append('image', Blob);

        const res = await axios.post(
          'https://mandarin.api.weniv.co.kr/image/uploadfiles',
          formData,
        );

        setProfileImage(
          `https://mandarin.api.weniv.co.kr/${res.data[0].filename}`,
        );
        resolve();
      };
    });
  };

  // userName 유효성 검사
  useEffect(() => {
    if (userName.length > 10 || (userName.length < 2 && userName !== '')) {
      setUserNameWarningMessage('2자~10자 이내여야 합니다.');
      setIsUserName(false);
    } else if (userName === '') {
      setIsUserName(false);
    } else {
      setUserNameWarningMessage();
      setIsUserName(true);
    }
  }, [userName]);

  // userID 유효성 검사
  useEffect(() => {
    const regExp = /^[a-z0-9A-Z_.,()]{1,}$/;
    if (!regExp.test(userID) && userID !== '') {
      setUserIDWarningMessage(
        '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
      );
      setIsUserID(false);
    } else if (userID === '') {
      setIsUserID(false);
    } else {
      setUserIDWarningMessage('');
      setIsUserID(true);
    }
  }, [userID]);

  const signInHandler = async function () {
    try {
      const res = await axios.post('https://mandarin.api.weniv.co.kr/user', {
        headers: {
          'Content-type': 'application/json',
        },
        user: {
          username: userName,
          email: email,
          password: password,
          accountname: userID,
          intro: userIntro,
          image: profileImage
            ? profileImage
            : 'https://mandarin.api.weniv.co.kr/1658886785881.png',
        },
      });
      navigate('/home');
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '이미 사용중인 계정 ID입니다.') {
        setUserIDWarningMessage('이미 사용중인 계정 ID입니다.');
      }
    }
  };

  return (
    <S.Wrapper>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <S.ImageBox>
        <img
          src={preview ? preview : defaultProfilePhoto}
          alt="프로필 사진 미리보기"
          className="defaultProfilePhoto"
        />
        <img
          src={fileUploadButton}
          alt="버튼을 누르면 프로필사진을 선택하고 등록합니다"
          className="fileUploadButton"
          onClick={openInputFile}
        />
        <input
          type="file"
          accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={imageFileHandler}
        />
      </S.ImageBox>
      <form action="#">
        <S.FormBox>
          <label htmlFor="userName">사용자 이름</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="2~10자 이내여야 합니다."
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <p className="message">{userNameWarningMessage}</p>
          <label htmlFor="userID">계정 ID</label>
          <input
            type="text"
            id="userID"
            name="userID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
          <p className="message">{userIDWarningMessage}</p>
          <label htmlFor="userAbout">소개</label>
          <input
            type="text"
            id="userIntro"
            name="userIntro"
            placeholder="자신과 소중한 유기묘에 대해 소개해 주세요!"
            onChange={(e) => {
              setUserIntro(e.target.value);
            }}
          />
          <S.Button
            onClick={signInHandler}
            disabled={passed ? null : 'disabled'}
          >
            사지마캣 시작하기
          </S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SetProfile;

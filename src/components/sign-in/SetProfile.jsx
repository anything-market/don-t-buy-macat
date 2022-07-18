import React, { useRef, useEffect, useState } from 'react';
import defaultProfilePhoto from '../../assets/basic-profile-img-.svg';
import fileUploadButton from '../../assets/upload-file.svg';
import * as S from './setProfile.style';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SetProfile() {
  const location = useLocation();
  const fileInput = useRef();

  const email = location.state.email;
  const password = location.state.password;
  // console.log(email, password);

  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');

  const [isValidatedUserName, setIsValidatedUserName] = useState(false);

  const [userNameWarningMessage, setUserNameWarningMessage] = useState('');
  const [userIDWarningMessage, setUserIDWarningMessage] = useState('');
  const [userIntroWarningMessage, setUserIntroWarningMessage] = useState('');

  const [profileImage, setProfileImage] = useState('');
  const [preview, setPreview] = useState('');

  // file 인풋창 열어주는 함수
  const openInputFile = () => {
    fileInput.current.click();
  };

  const imageFileHandler = (e) => {
    const Blob = e.target.files[0];
    console.log(Blob.type);

    // 이미지가 undefined면 함수 종료
    if (Blob === undefined) return;

    // 이미지 type이 'image'로 시작하지 않으면 함수 종료
    if (Blob.type.substr(0, 5) !== 'image') {
      alert('image만 업로드가 가능합니다');
      return;
      // 이미지 type이 'image'로 시작하면 1.preveiw이미지로 넣어주기 2.서버에 이미지 보내서 filename받아오기
      // 두가지 일을 같이 하는게 맞는건가?
    } else if (Blob.type.substr(0, 5) === 'image') {
      // 이미지 preview를 위한 DataURL변환과정
      const reader = new FileReader();
      reader.readAsDataURL(Blob);

      return new Promise((resolve) => {
        reader.onload = async () => {
          // 선택한 이미지 서버로 formData형태로 넣어줄 예정
          let formData = new FormData();
          formData.append('image', Blob);
          setPreview(reader.result);

          const res = await axios.post(
            'http://146.56.183.55:5050/image/uploadfiles',
            formData,
          );
          // console.log(res);
          console.log(res.data[0].filename);
          // 서버에 전송할 이미지 파일 proFileImage에 넣어주기
          setProfileImage(`http://146.56.183.55:5050/${res.data[0].filename}`);
          // 이미지(Blob) DataRUL로 변경한 결과 preview에 넣어주기
          resolve();
        };
      });
    }
  };

  useEffect(() => {
    console.log(userName.length);
    if (userName.length > 10 || (userName.length < 2 && userName !== '')) {
      setUserNameWarningMessage('2자~10자 이내여야 합니다.');
      setIsValidatedUserName(false);
    } else if (userName === '') {
      setIsValidatedUserName(false);
    } else {
      setUserNameWarningMessage();
      setIsValidatedUserName(true);
    }
  }, [userName]);

  useEffect(() => {
    const regExp = /^[a-z0-9A-Z_.,()]{1,}$/;
    if (!regExp.test(userID) && userID !== '') {
      setUserIDWarningMessage(
        '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
      );
    } else {
      setUserIDWarningMessage('');
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
          image: profileImage,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Wrapper>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <S.ImageBox>
        <img
          src={preview ? preview : defaultProfilePhoto}
          alt=""
          className="defaultProfilePhoto"
        />
        <img
          src={fileUploadButton}
          alt=""
          className="fileUploadButton"
          onClick={openInputFile}
        />
        <input
          type="file"
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
          <p className="message">{userIntroWarningMessage}</p>
          <S.Button onClick={signInHandler}>사지마캣 시작하기</S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SetProfile;

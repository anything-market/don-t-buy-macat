import React, { useRef } from 'react';
import defaultProfilePhoto from '../../assets/basic-profile-img-.svg';
import fileUploadButton from '../../assets/upload-file.svg';
import * as S from './setProfile.style';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
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

  const [profileImage, setProfileImage] = useState('');

  // file 인풋창 열어주는 함수
  const openInputFile = () => {
    fileInput.current.click();
  };

  // file input창 onchange시 실행
  const imageFileHandler = (e) => {
    const file = e.target.files[0];
    // file이 있으면서 file type이 image일때만
    if (file && file.type.substr(0, 5) === 'image') {
      console.log(file.size);
      console.log(file.type);
      setProfileImage(file.name);
    } else if (file.type.substr(0, 5) !== 'image') {
      alert('image형태만 업로드가 가능합니다.');
      setProfileImage('');
    } else {
      setProfileImage('');
    }
  };

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
        <img src={defaultProfilePhoto} alt="" className="defaultProfilePhoto" />
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
          <S.Button onClick={signInHandler}>사지마캣 시작하기</S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SetProfile;

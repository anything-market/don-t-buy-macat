import React, { useRef } from 'react';
import basicProfile from '../../assets/basic-profile-img-.svg';
import uploadFile from '../../assets/upload-file.svg';
import * as S from './setProfile.style';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SetProfile() {
  const location = useLocation();
  const fileInput = useRef();

  const email = location.state.email;
  const password = location.state.password;
  console.log(email, password);

  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [file, setFile] = useState('');

  const openInputFile = () => {
    fileInput.current.click();
  };

  const handleChangeFile = (event) => {
    setFile(event.target.files[0].name);
    console.log(event.target.files);
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
          image: file,
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
        <img src={basicProfile} alt="" className="basicProfile" />
        <img
          src={uploadFile}
          alt=""
          className="uploadFile"
          onClick={openInputFile}
        />
        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={handleChangeFile}
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

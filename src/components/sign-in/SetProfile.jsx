import React from 'react';
import basicProfile from '../../assets/basic-profile-img-.svg';
import uploadFile from '../../assets/upload-file.svg';
import * as S from './setProfile.style';
import { useLocation } from 'react-router-dom';

function SetProfile() {
  const location = useLocation();

  const email = location.state.email;
  const password = location.state.password;
  console.log(email, password);

  return (
    <S.Wrapper>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <S.ImageBox>
        <img src={basicProfile} alt="" className="basicProfile" />
        <img src={uploadFile} alt="" className="uploadFile" />
      </S.ImageBox>
      <form action="#">
        <S.FormBox>
          <label htmlFor="userName">사용자 이름</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="2~10자 이내여야 합니다."
          />
          <label htmlFor="userID">계정 ID</label>
          <input
            type="text"
            id="userID"
            name="userID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
          <label htmlFor="userAbout">소개</label>
          <input
            type="text"
            id="userAbout"
            name="userAbout"
            placeholder="자신과 소중한 유기묘에 대해 소개해 주세요!"
          />
          <S.Button>사지마캣 시작하기</S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SetProfile;

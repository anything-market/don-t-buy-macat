import React from 'react';
import { useState } from 'react';
import * as S from './signin.style';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const nextHandler = function () {
    navigate('/join/setprofile', {
      state: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <S.Wrapper>
      <h1>이메일로 회원가입</h1>
      <form action="#">
        <S.FormBox>
          <label htmlFor="name">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="이메일 주소를 입력해 주세요."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="passWord"
            name="password"
            placeholder="비밀번호를 설정해 주세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <S.Button onClick={nextHandler}>다음</S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SignIn;
